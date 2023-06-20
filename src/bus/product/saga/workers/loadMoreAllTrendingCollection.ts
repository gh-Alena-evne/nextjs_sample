import { apply, call, put } from 'redux-saga/effects';
import { api } from '@REST/api';
import {
  FillAllTrendingCollectionsActionPayload,
  PushMoreAllTrendingCollectionActionPayload,
} from '@bus/product/typedefs';
import { handleError } from '@bus/ui/saga/workers';
import { throwError } from '@bus/ui/saga/workers/throwError';
import { getNewAllCollectionData } from '@helpers/formating';
import { PayloadAction } from '@reduxjs/toolkit';
import { productActions } from '../../actions';

export function* loadMoreAllTrendingCollection({
  payload,
}: PayloadAction<PushMoreAllTrendingCollectionActionPayload>) {
  try {
    yield put(productActions.startFetchingAllCollection());

    const response: Response = yield apply(api, api.get, [
      { endpoint: payload, unsafe: true, direct: true },
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

    yield put(productActions.pushMoreAllTrendingCollection(newData));
  } catch (e) {
    yield handleError(e);
  } finally {
    yield put(productActions.stopFetchingAllCollection());
  }
}
