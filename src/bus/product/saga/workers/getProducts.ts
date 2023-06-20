import { put, call, apply } from 'redux-saga/effects';
import { api } from '@REST/api';
import { PaginatedResponse, Product } from '@bus/product/typedefs';
import { handleError } from '@bus/ui/saga/workers';
import { throwError } from '@bus/ui/saga/workers/throwError';
import { getNewProductsData } from '@helpers/formating';
import { productActions } from '../../actions';

export function* getProducts() {
  try {
    yield put(productActions.startFetchingProducts());
    const response: Response = yield apply(api, api.get, [
      { endpoint: 'products', unsafe: true },
    ]);

    if (response.status !== 200) {
      yield throwError(response);
    }
    const data: PaginatedResponse<Product> = yield call([response, 'json']);
    yield put(
      productActions.fillProducts({
        data: getNewProductsData(data.data),
        next_page_url: data.next_page_url,
        total: data.total,
      }),
    );
  } catch (e) {
    yield handleError(e);
  } finally {
    yield put(productActions.stopFetchingProducts());
  }
}
