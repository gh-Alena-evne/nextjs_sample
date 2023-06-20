import { put, apply, call } from 'redux-saga/effects';
import { api } from '@REST/api';
import { ISingleCollection } from '@bus/product/typedefs';
import { handleError } from '@bus/ui/saga/workers';
import { throwError } from '@bus/ui/saga/workers/throwError';
import { getNewSingleCollectionData } from '@helpers/formating';
import { PayloadAction } from '@reduxjs/toolkit';
import { productActions } from '../../actions';

export function* getCollection(action: PayloadAction<any>) {
  try {
    yield put(productActions.startFetchingProducts());
    const collectionId = action.payload.collectionId || '';
    const response: Response = yield apply(api, api.get, [
      { endpoint: `collection/${collectionId}`, unsafe: true },
    ]);

    if (response.status !== 200) {
      yield throwError(response);
    }
    const data: ISingleCollection = yield call([response, 'json']);

    yield put(productActions.fillCollection(data));
    yield put(
      productActions.fillProducts({
        data: getNewSingleCollectionData(data!.productsCollection!.data),
        next_page_url: data.productsCollection.next_page_url,
        total: data.productsCollection.total,
      }),
    );
  } catch (e) {
    yield handleError(e);
  } finally {
    yield put(productActions.stopFetchingProducts());
  }
}
