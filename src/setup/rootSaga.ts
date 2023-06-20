// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { all, call } from 'redux-saga/effects';
import { watchAuth as authSaga } from '@bus/auth/saga/watchers';
import { watchCart as cartSaga } from '@bus/cart/saga/watchers';
import { watchOrders as ordersSaga } from '@bus/orders/saga/watchers';
import { watchProduct as productSaga } from '@bus/product/saga/watchers';
import { watchUi as uiSaga } from '@bus/ui/saga/watchers';

// imports

export function* rootSaga() {
  // eslint-disable-next-line prettier/prettier
  yield all([
    // inject
    call(ordersSaga),
    call(authSaga),
    call(cartSaga),
    call(productSaga),
    call(uiSaga),
  ]);
}
