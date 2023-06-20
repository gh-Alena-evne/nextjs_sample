import { apply } from 'redux-saga/effects';
import { api } from '@REST/api';
import { handleError } from '@bus/ui/saga/workers';
import { throwError } from '@bus/ui/saga/workers/throwError';
import { PayloadAction } from '@reduxjs/toolkit';

export function* checkOrder({ payload }: PayloadAction<any>) {
  const data = payload;
  if (!data.coupon) {
    delete data.coupon;
  }
  try {
    const response: Response = yield apply(api, api.post, [
      {
        endpoint: 'paypal/check-order',
        body: JSON.stringify(data),
        unsafe: true,
      },
    ]);

    if (response.status !== 200) {
      yield throwError(response);
    }
  } catch (e) {
    yield handleError(e);
  }
}
