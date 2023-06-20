import { put, apply, call } from 'redux-saga/effects';
import { api } from '@REST/api';
import { SearchTag } from '@bus/product/typedefs';
import { handleError } from '@bus/ui/saga/workers';
import { PayloadAction } from '@reduxjs/toolkit';
import { productActions } from '../../actions';

export function* getTags(action: PayloadAction<number>) {
  try {
    const response: Response = yield apply(api, api.get, [
      { endpoint: `tags`, unsafe: true },
    ]);
    const data: SearchTag[] = yield call([response, 'json']);
    yield put(productActions.fillTags(data));
  } catch (e) {
    yield handleError(e);
  }
}
