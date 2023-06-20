import { all, call, takeEvery } from 'redux-saga/effects';
import { uiActions } from '../actions';
// eslint-disable-next-line prettier/prettier
import {
  modal,
  removeModal,
} from './workers';

// imports
function* watchModal() {
  yield takeEvery(uiActions.modal.type, modal);
}

function* watchRemoveModal() {
  yield takeEvery(uiActions.closeModal.type, removeModal);
}
// watchers
export function* watchUi() {
  // eslint-disable-next-line prettier/prettier
  yield all([
    // inject
    call(watchModal),
    call(watchRemoveModal),
  ]);
}
