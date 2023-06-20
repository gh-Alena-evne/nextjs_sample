import { parseCookies } from 'nookies';
import { apply, call, put, select } from 'redux-saga/effects';
import { api, removeQuotes } from '@REST/api';
import { getOrderId } from '@bus/cart/selectors';
import { handleError } from '@bus/ui/saga/workers';
import { throwError } from '@bus/ui/saga/workers/throwError';
import {
  FormErrors,
  getServerFormErrors,
  ServerFormErrors,
} from '@core/FinalForm/getServerErrors';
import { PayloadActionWithPromiseMeta } from '@setup/typedefs';
import { cartActions } from '../../actions';

export function* updateOrder({
  payload,
  meta: { resolve, reject },
}: PayloadActionWithPromiseMeta<any>) {
  const cookies = parseCookies();
  try {
    yield put(cartActions.startFetching());

    const body: string = yield call(JSON.stringify, payload);
    const orderId: number = yield select(getOrderId);

    const response: Response = yield apply(api, api.put, [
      {
        endpoint: `${process.env.NEXT_APP_BASE_URL}/api/updateOrder/${orderId}`,
        direct: true,
        unsafe: true,
        headers: {
          authorization: 'Bearer ' + removeQuotes(cookies['accessToken']),
        },
        body,
      },
    ]);

    const data: ServerFormErrors = yield call([response, 'json']);

    if (response.status !== 200) {
      const formErrors: FormErrors = yield call(
        getServerFormErrors,
        data as ServerFormErrors,
      );
      yield put(
        cartActions.fillDiscount({
          success: false,
          message: formErrors.coupon,
        }),
      );
      reject(formErrors);
      yield throwError(response);
    }

    yield put(
      cartActions.fillCreateOrder({
        ...data,
        email: payload.email,
        coupon: payload.coupon,
        shipping_address: payload.shipping_address,
      } as any),
    );

    resolve();
  } catch (e) {
    yield handleError(e);
  } finally {
    yield put(cartActions.stopFetching());
  }
}
