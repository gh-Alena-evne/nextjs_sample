import { apply, call, put } from 'redux-saga/effects';
import { api } from '@REST/api';
import {
  LoadMoreActionPayload,
  PaginatedResponse,
  Collection,
} from '@bus/product/typedefs';
import { handleError } from '@bus/ui/saga/workers';
import { throwError } from '@bus/ui/saga/workers/throwError';
import { getNewCollectionsData } from '@helpers/formating';
import { PayloadAction } from '@reduxjs/toolkit';
import { productActions } from '../../actions';

export function* loadMoreCollections({
  payload,
}: PayloadAction<LoadMoreActionPayload>) {
  try {
    yield put(productActions.startFetchingCollections());

    const response: Response = yield apply(api, api.get, [
      { endpoint: payload, unsafe: true, direct: true },
    ]);

    if (response.status !== 200) {
      yield throwError(response);
    }
    const data: PaginatedResponse<Collection> = yield call([response, 'json']);
    yield put(
      productActions.pushMoreCollections({
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
