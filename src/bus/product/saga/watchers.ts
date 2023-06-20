import { all, call, takeEvery, takeLatest } from 'redux-saga/effects';
import { productActions } from '../actions';
// eslint-disable-next-line prettier/prettier
import {
  getProducts,
  getCollections,
  getSearch,
  loadMoreProducts,
  loadMoreCollections,
  getProduct,
  getCollection,
  getTags,
  getTrendingCollections,
  getAllTrendingCollections,
  loadMoreAllTrendingCollection,
  loadMoreProductsCollection,
} from './workers';

// imports
function* watchGetProducts() {
  yield takeLatest(productActions.getProducts.type, getProducts);
}
function* watchGetCollections() {
  yield takeEvery(productActions.getCollections.type, getCollections);
}
function* watchProductsLoadMore() {
  yield takeEvery(productActions.loadMoreProducts.type, loadMoreProducts);
}

function* watchCollectionsLoadMore() {
  yield takeEvery(productActions.loadMoreCollections.type, loadMoreCollections);
}

function* watchGetProduct() {
  yield takeEvery(productActions.getProduct.type, getProduct);
}
function* watchGetCollection() {
  yield takeEvery(productActions.getCollection.type, getCollection);
}
function* watchGetTags() {
  yield takeEvery(productActions.getTags.type, getTags);
}

function* watchGetSearch() {
  yield takeEvery(productActions.getSearch.type, getSearch);
}
function* watchGetTrendingCollections() {
  yield takeEvery(
    productActions.getTrendingCollections.type,
    getTrendingCollections,
  );
}
function* watchGetAllTrendingCollections() {
  yield takeEvery(
    productActions.getAllTrendingCollections.type,
    getAllTrendingCollections,
  );
}
function* watchLoadMoreAllTrendingCollection() {
  yield takeEvery(
    productActions.loadMoreAllTrendingCollection.type,
    loadMoreAllTrendingCollection,
  );
}
function* watchLoadMoreProductsCollection() {
  yield takeEvery(
    productActions.loadMoreProductsCollection.type,
    loadMoreProductsCollection,
  );
}
// watchers
export function* watchProduct() {
  // eslint-disable-next-line prettier/prettier
  yield all([
    // inject
    call(watchLoadMoreProductsCollection),
    call(watchLoadMoreAllTrendingCollection),
    call(watchGetAllTrendingCollections),
    call(watchGetTrendingCollections),
    call(watchGetProducts),
    call(watchGetCollections),
    call(watchProductsLoadMore),
    call(watchCollectionsLoadMore),
    call(watchGetProduct),
    call(watchGetCollection),
    call(watchGetTags),
    call(watchGetSearch),
  ]);
}
