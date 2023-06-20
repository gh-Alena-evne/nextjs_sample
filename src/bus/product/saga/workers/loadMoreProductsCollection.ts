import { apply, call, put } from 'redux-saga/effects';
import { api } from '@REST/api';
import { ISingleCollection } from '@bus/product/typedefs';
import { handleError } from '@bus/ui/saga/workers';
import { throwError } from '@bus/ui/saga/workers/throwError';
import { getNewProductsData } from '@helpers/formating';
import { PayloadAction } from '@reduxjs/toolkit';
import { productActions } from '../../actions';

export function* loadMoreProductsCollection({
  payload,
}: PayloadAction<string>) {
  try {
    yield put(productActions.startFetchingCollections());

    const response: Response = yield apply(api, api.get, [
      { endpoint: payload, unsafe: true, direct: true },
    ]);

    if (response.status !== 200) {
      yield throwError(response);
    }
    const data: ISingleCollection = yield call([response, 'json']);
    yield put(
      productActions.pushMoreProducts({
        data: getNewProductsData(
          data.productsCollection.data.map((item) => item.product),
        ),
        next_page_url: data.productsCollection.next_page_url,
        total: data.productsCollection.total,
      }),
    );
  } catch (e) {
    yield handleError(e);
  } finally {
    yield put(productActions.stopFetchingCollections());
  }
}
