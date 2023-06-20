import { apply, call, put } from 'redux-saga/effects';
import { api } from '@REST/api';
import { FillAllTrendingCollectionsActionPayload } from '@bus/product/typedefs';
import { handleError } from '@bus/ui/saga/workers';
import { throwError } from '@bus/ui/saga/workers/throwError';
import { getNewAllCollectionData } from '@helpers/formating';
import { productActions } from '../../actions';

export function* getAllTrendingCollections() {
  try {
    yield put(productActions.startFetchingCollections());

    const response: Response = yield apply(api, api.get, [
      { endpoint: `all-trending-collections`, unsafe: true },
    ]);

    if (response.status !== 200) {
      yield throwError(response);
    }

    const data: FillAllTrendingCollectionsActionPayload = yield call([
      response,
      'json',
    ]);

    const newData = {
      ...data,
      data: getNewAllCollectionData(data.data),
    };

    yield put(productActions.fillAllTrendingCollections(newData));
  } catch (e) {
    yield handleError(e);
  } finally {
    yield put(productActions.stopFetchingCollections());
  }
}
