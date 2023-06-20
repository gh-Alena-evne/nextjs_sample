import { put, call, apply } from 'redux-saga/effects';
import { api } from '@REST/api';
import { Product } from '@bus/product/typedefs';
import { handleError } from '@bus/ui/saga/workers';
import { throwError } from '@bus/ui/saga/workers/throwError';
import { PayloadAction } from '@reduxjs/toolkit';
import { productActions } from '../../actions';

export function* getProduct(action: PayloadAction<any>) {
  try {
    yield put(productActions.startFetchingSingleProduct());

    const { productId } = action.payload;

    const response: Response = yield apply(api, api.get, [
      { endpoint: `product/${productId}`, unsafe: true },
    ]);

    if (response.status !== 200) {
      yield throwError(response);
    }
    const data: Product = yield call([response, 'json']);
    const newData = {
      ...data,
      src: `/api/preview/${data.image.name}`,
    };
    yield put(productActions.fillProduct(newData));
  } catch (e) {
    yield handleError(e);
  } finally {
    yield put(productActions.stopFetchingSingleProduct());
  }
}
