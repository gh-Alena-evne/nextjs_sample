import { createAction } from '@reduxjs/toolkit';
import cartSlice from './slice';

export const cartActions = {
  ...cartSlice.actions,
  discount: createAction('cart/discount', (payload) => {
    return {
      payload,
    };
  }),
  updateOrder: createAction(
    'cart/updateOrder',
    ({ values, resolve, reject }) => {
      return {
        payload: values,
        meta: { resolve, reject },
      };
    },
  ),
  createOrder: createAction(
    'cart/createOrder',
    ({ values, resolve, reject }) => {
      return {
        payload: values,
        meta: { resolve, reject },
      };
    },
  ),
  checkOrder: createAction(
    'cart/checkOrder',
    (data: { id: string; coupon: string }) => ({
      payload: {
        id: data.id,
        coupon: data.coupon,
      },
    }),
  ),
};
