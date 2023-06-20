import { createSelector } from 'reselect';
import { RootState } from '@setup/typedefs';

const productSelector = (state: RootState) => state.product;

export const productsSelector = createSelector(
  [productSelector],
  (result) => result.products?.data,
);
export const collectionsSelector = createSelector(
  [productSelector],
  (result) => result.collections?.data,
);
export const getTrendingCollectionsSelector = createSelector(
  [productSelector],
  (result) => result.trendingProductCollection,
);

export const getIsFetchingProducts = createSelector(
  [productSelector],
  (result) => result.isFetchingProducts,
);

export const getIsFetchingAllCollection = createSelector(
  [productSelector],
  (result) => result.isFetchingAllCollection,
);

export const getIsFetchingSingleProduct = createSelector(
  [productSelector],
  (result) => result.isFetchingSingleProduct,
);

export const getIsFetchingCollections = createSelector(
  [productSelector],
  (result) => result.isFetchingCollections,
);

export const getProductsTotal = createSelector(
  [productSelector],
  (result) => result.products?.total,
);

export const getCollectionsTotal = createSelector(
  [productSelector],
  (result) => result.collections?.total,
);

export const getProductsNextUrl = createSelector(
  [productSelector],
  (result) => result.products?.next_page_url,
);

export const getCollectionsNextUrl = createSelector(
  [productSelector],
  (result) => result.collections?.next_page_url,
);

export const getSingleProduct = createSelector(
  [productSelector],
  (result) => result.singleProduct,
);
export const getSingleCollection = createSelector(
  [productSelector],
  (result) => result.singleCollection,
);

export const getSearchTags = createSelector(
  [productSelector],
  (result) => result.searchTags,
);

export const getAllCollectionsTotal = createSelector(
  [productSelector],
  (result) => result.allTrendingProductCollection?.total,
);

export const getAllCollectionsList = createSelector(
  [productSelector],
  (result) => result.allTrendingProductCollection?.data,
);

export const getAllCollectionsNextUrl = createSelector(
  [productSelector],
  (result) => result.allTrendingProductCollection?.next_page_url,
);
