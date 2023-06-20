// eslint-disable-next-line @typescript-eslint/no-unused-vars,prettier/prettier
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line prettier/prettier
import {
  ProductState,
  Product,
  Collection,
  PaginatedResponse,
  SearchTag,
  FillTrendingCollectionActionPayload,
  FillAllTrendingCollectionsActionPayload,
  ISingleCollection,
} from './typedefs';

const initialState: ProductState = {
  isFetchingProducts: false,
  isFetchingCollections: false,
  isFetchingSingleProduct: false,
  isFetchingAllCollection: false,
  products: null,
  collections: null,
  singleProduct: null,
  singleCollection: null,
  trendingProductCollection: [],
  searchTags: [],
  allTrendingProductCollection: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    startFetchingProducts(state) {
      state.isFetchingProducts = true;
    },
    stopFetchingProducts(state) {
      state.isFetchingProducts = false;
    },
    startFetchingAllCollection(state) {
      state.isFetchingAllCollection = true;
    },
    stopFetchingAllCollection(state) {
      state.isFetchingAllCollection = false;
    },
    fillProducts(state, action: PayloadAction<PaginatedResponse<Product>>) {
      state.products = action.payload;
    },
    pushMoreProducts(state, action: PayloadAction<PaginatedResponse<Product>>) {
      state.products = {
        ...action.payload,
        data: [...state.products!.data, ...action.payload.data],
      };
    },
    pushMoreCollections(
      state,
      action: PayloadAction<PaginatedResponse<Collection>>,
    ) {
      state.collections = {
        ...action.payload,
        data: [...state.collections!.data, ...action.payload.data],
      };
    },
    startFetchingSingleProduct(state) {
      state.isFetchingSingleProduct = true;
    },
    stopFetchingSingleProduct(state) {
      state.isFetchingSingleProduct = false;
    },
    startFetchingCollections(state) {
      state.isFetchingCollections = true;
    },
    stopFetchingCollections(state) {
      state.isFetchingCollections = false;
    },
    fillCollections(
      state,
      action: PayloadAction<PaginatedResponse<Collection>>,
    ) {
      state.collections = action.payload;
    },
    fillProduct(state, action: PayloadAction<Product>) {
      state.singleProduct = action.payload;
    },
    fillCollection(state, action: PayloadAction<ISingleCollection>) {
      state.singleCollection = action.payload;
    },
    clearSingleProduct(state) {
      state.singleProduct = null;
    },
    fillTags(state, action: PayloadAction<SearchTag[]>) {
      state.searchTags = action.payload;
    },
    fillTrendingCollection(
      state,
      action: PayloadAction<FillTrendingCollectionActionPayload>,
    ) {
      state.trendingProductCollection = action.payload;
    },
    fillAllTrendingCollections(
      state,
      action: PayloadAction<FillAllTrendingCollectionsActionPayload>,
    ) {
      state.allTrendingProductCollection = action.payload;
    },
    pushMoreAllTrendingCollection(
      state,
      action: PayloadAction<FillAllTrendingCollectionsActionPayload>,
    ) {
      state.allTrendingProductCollection = {
        ...action.payload,
        data: [
          ...state.allTrendingProductCollection!.data,
          ...action.payload.data,
        ],
      };
    },
    // inject
  },
});

export default productSlice;
