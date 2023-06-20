import { all, call, takeEvery } from 'redux-saga/effects';
import { cartActions } from '../actions';
// eslint-disable-next-line prettier/prettier
import {
  checkOrder,
  createOrder,
  updateOrder,
  discount,
} from './workers';
// imports
function* watchCheckOrder() {
  yield takeEvery(cartActions.checkOrder.type, checkOrder);
}
function* watchCreateOrder() {
  yield takeEvery(cartActions.createOrder.type, createOrder);
}
function* watchUpdateOrder() {
  yield takeEvery(cartActions.updateOrder.type, updateOrder);
}
function* watchDiscount() {
  yield takeEvery(cartActions.discount.type, discount);
}
// watchers
export function* watchCart() {
  // eslint-disable-next-line prettier/prettier
  yield all([
    // inject
    call(watchDiscount),
    call(watchUpdateOrder),
    call(watchCreateOrder),
    call(watchCheckOrder),
  ]);
}
