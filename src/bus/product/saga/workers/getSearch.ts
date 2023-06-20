import { all, apply, call, put } from 'redux-saga/effects';
import { api } from '@REST/api';
import { productActions } from '@bus/product/actions';
import { PaginatedResponse, Product, Collection } from '@bus/product/typedefs';
import { handleError } from '@bus/ui/saga/workers';
import { getNewCollectionsData, getNewProductsData } from '@helpers/formating';
import { PayloadAction } from '@reduxjs/toolkit';

export function* getSearch(action: PayloadAction<any>) {
  try {
    yield put(productActions.startFetchingProducts());

    const { searchQuery } = action.payload;

    const [productsResponse, collectionsResponse]: Response[] = yield all([
      apply(api, api.get, [
        { endpoint: `products?search=${searchQuery}`, unsafe: true },
      ]),
      apply(api, api.get, [
        { endpoint: `collections?search=${searchQuery}`, unsafe: true },
      ]),
    ]);

    const products: PaginatedResponse<Product> = yield call([
      productsResponse,
      'json',
    ]);
    const collections: PaginatedResponse<Collection> = yield call([
      collectionsResponse,
      'json',
    ]);

    yield put(
      productActions.fillProducts({
        data: getNewProductsData(products.data),
        next_page_url: products.next_page_url,
        total: products.total,
      }),
    );

    yield put(
      productActions.fillCollections({
        data: getNewCollectionsData(collections.data),
        next_page_url: collections.next_page_url,
        total: collections.total,
      }),
    );
  } catch (e) {
    yield handleError(e);
  } finally {
    yield put(productActions.stopFetchingProducts());
  }
}
