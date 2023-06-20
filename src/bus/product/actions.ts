import { createAction } from '@reduxjs/toolkit';
import productSlice from './slice';

export const productActions = {
  ...productSlice.actions,
  loadMoreProductsCollection: createAction(
    'product/loadMoreProductsCollection',
    (nextPageUrl: string) => ({
      payload: nextPageUrl,
    }),
  ),
  loadMoreAllTrendingCollection: createAction(
    'product/loadMoreAllTrendingCollection',
    (nextPageUrl: string) => ({
      payload: nextPageUrl,
    }),
  ),
  getAllTrendingCollections: createAction('product/getAllTrendingCollections'),
  getTrendingCollections: createAction('product/getTrendingCollections'),
  getProducts: createAction('product/getProducts'),
  getCollections: createAction('product/getCollections'),
  getCollection: createAction(
    'product/getCollection',
    ({ collectionId }: { collectionId: number }) => ({
      payload: { collectionId },
    }),
  ),
  loadMoreProducts: createAction(
    'product/loadMoreProducts',
    (nextPageUrl: string) => ({
      payload: nextPageUrl,
    }),
  ),
  loadMoreCollections: createAction(
    'product/loadMoreCollections',
    (nextPageUrl: string) => ({
      payload: nextPageUrl,
    }),
  ),
  getProduct: createAction<number>('product/getProduct'),
  getTags: createAction('product/getTags'),
  getSearch: createAction('product/getSearch', (searchQuery: string) => ({
    payload: searchQuery,
  })),
};
