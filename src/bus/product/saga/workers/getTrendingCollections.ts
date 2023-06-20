import { apply, call, put } from 'redux-saga/effects';
import { api } from '@REST/api';
import { FillTrendingCollectionActionPayload } from '@bus/product/typedefs';
import { handleError } from '@bus/ui/saga/workers';
import { throwError } from '@bus/ui/saga/workers/throwError';
import { getNewTrendingCollectionData } from '@helpers/formating';
import { productActions } from '../../actions';

export function* getTrendingCollections() {
  try {
    yield put(productActions.startFetchingCollections());

    const response: Response = yield apply(api, api.get, [
      { endpoint: `trending-collections`, unsafe: true },
    ]);

    if (response.status !== 200) {
      yield throwError(response);
    }

    const data: FillTrendingCollectionActionPayload = yield call([
      response,
      'json',
    ]);

    yield put(
      productActions.fillTrendingCollection(getNewTrendingCollectionData(data)),
    );
  } catch (e) {
    yield handleError(e);
  } finally {
    yield put(productActions.stopFetchingCollections());
  }
}
