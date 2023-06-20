import { put, apply, call } from 'redux-saga/effects';
import { api } from '@REST/api';
import { Collection, PaginatedResponse } from '@bus/product/typedefs';
import { handleError } from '@bus/ui/saga/workers';
import { throwError } from '@bus/ui/saga/workers/throwError';
import { getNewCollectionsData } from '@helpers/formating';
import { productActions } from '../../actions';

export function* getCollections() {
  try {
    yield put(productActions.startFetchingCollections());

    const response: Response = yield apply(api, api.get, [
      { endpoint: `collections`, unsafe: true },
    ]);

    if (response.status !== 200) {
      yield throwError(response);
    }
    const data: PaginatedResponse<Collection> = yield call([response, 'json']);
    yield put(
      productActions.fillCollections({
        data: getNewCollectionsData(data.data),
        next_page_url: data.next_page_url,
        total: data.total,
      }),
    );
  } catch (e) {
    yield handleError(e);
  } finally {
    yield put(productActions.stopFetchingCollections());
  }
}
