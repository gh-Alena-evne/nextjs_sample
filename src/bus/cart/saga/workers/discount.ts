import { apply, call, put } from 'redux-saga/effects';
import { api } from '@REST/api';
import { FillDiscountActionPayload } from '@bus/cart/typedefs';
import { handleError } from '@bus/ui/saga/workers';
import { throwError } from '@bus/ui/saga/workers/throwError';
import { ServerFormErrors } from '@core/FinalForm/getServerErrors';
import { cartActions } from '../../actions';

export function* discount({ payload }: any) {
  try {
    yield put(cartActions.startFetching());

    const body: string = yield call(JSON.stringify, payload);

    const response: Response = yield apply(api, api.post, [
      { endpoint: `order/check-coupon`, body, unsafe: true },
    ]);

    const data: ServerFormErrors = yield call([response, 'json']);

    if (response.status !== 200) {
      yield throwError(response);
    }

    yield put(
      cartActions.fillDiscount(data as unknown as FillDiscountActionPayload),
    );
  } catch (e) {
    yield handleError(e);
  } finally {
    yield put(cartActions.stopFetching());
  }
}
