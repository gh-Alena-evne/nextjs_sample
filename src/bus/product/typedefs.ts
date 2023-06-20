//state type____________________________________
export type ProductState = {
  isFetchingProducts: boolean;
  isFetchingCollections: boolean;
  isFetchingSingleProduct: boolean;
  isFetchingAllCollection: boolean;
  products: PaginatedResponse<Product> | null;
  collections: PaginatedResponse<Collection> | null;
  trendingProductCollection: TrendingCollection[];
  allTrendingProductCollection: IAllTrendingCollections | null;
  singleProduct: Product | null;
  singleCollection: ISingleCollection | null;
  searchTags: SearchTag[];
};

export type PaginatedResponse<T> = {
  data: T[];
  next_page_url?: string | null;
  total: number;
};

//payload types_________________________________
export type PushMoreProductsCollectionActionPayload = {};

export type PushMoreAllTrendingCollectionActionPayload = string;

export type FillAllTrendingCollectionsActionPayload = IAllTrendingCollections;

export type FillTrendingCollectionActionPayload = TrendingCollection[];

export type LoadMoreActionPayload = string;

//common types__________________________________

export interface IAllTrendingCollections {
  current_page: number;
  data: IAllTrendingCollectionsItem[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: IAllTrendingCollectionsLink[];
  next_page_url: null | string;
  path: string;
  per_page: number;
  prev_page_url: null | string;
  to: number;
  total: number;
}

export interface IAllTrendingCollectionsItem {
  id: number;
  name: string;
  short_description: null | string;
  description: null | string;
  active: number;
  created_at: string;
  updated_at: string;
  menu_order: number;
  trending: number;
  items_count: number;
  all_trending_product_collections: IAllTrendingProductCollectionsItem[];
}

export interface IAllTrendingCollectionsLink {
  url: null | string;
  label: string;
  active: boolean;
}

export interface IAllTrendingProductCollectionsItem {
  id: number;
  parent_id: null | number;
  user_id: null | number;
  name: string;
  description: null | string;
  price: number;
  disabled: number;
  disabled_to_time: null;
  deleted: number;
  owner: string | null;
  seed: null | string;
  license_type: string | null;
  small_image_path: string;
  job_url: null | string;
  image_url: string;
  created_at: string;
  updated_at: string;
  pivot: {
    collection_id: number;
    product_id: number;
  };
  rectangle_image: {
    id: number;
    product_id: number;
    name: string;
    original_name: string;
    size: number;
    url: string;
    width: number;
    height: number;
    mime_type: string;
    remote_url: string;
    remote_id: string;
    created_at: string;
    updated_at: string;
  };
  src: string;
}

export interface ProductsResponse {
  current_page: number;
  data: Product[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: string[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  total: number;
}

//TODO: remove nulls
export interface Product {
  id: number;
  parent_id: number | null;
  user_id: number | null;
  name: string;
  description: string | null;
  price: number;
  license_type: string;
  small_image_path: string;
  image_url: string;
  // prompt: string;
  created_at: string;
  updated_at: string;
  price_variants: PriceVariant[];
  image: Image;
  disabled: number;
  owner: string | null;
  seed: string | null;
  job_url: string | null;
  deleted: number | null;
  disabled_to_time: string | null;
  products_collections: Collection[];
  src: string;
}

export interface Collection {
  id: number;
  name: string;
  product_collections?: Product[];
}

export interface ISingleCollection {
  collection: {
    id: number;
    name: string;
    short_description: null | string;
    description: null | string;
    active: number;
    created_at: string;
    updated_at: string;
    menu_order: number;
    trending: number;
  };
  productsCollection: {
    current_page: number;
    data: ProductCollection[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: IAllTrendingCollectionsLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: null | string;
    to: number;
    total: number;
  };
}

export interface ProductCollection {
  collection_id: number;
  created_at: string;
  id: number;
  product: Product;
  product_id: number;
  updated_at: string;
}

export interface TrendingCollection {
  id: number;
  name: string;
  short_description: null | string;
  description: null | string;
  active: number;
  created_at: string;
  updated_at: string;
  menu_order: number;
  trending: number;
  trending_product_collections?: Product[];
  items_count: number;
}

export interface PriceVariant {
  id: number;
  name: string;
  short_description: string | null;
  description: string | null;
  amount: number;
  active: number;
  // check deleted on backend
  deleted: number;
  created_at: string;
  updated_at: string;
  // check pivot on backend
  pivot: {
    product_id: number;
    price_variant_id: number;
  };
}

export interface Image {
  id: number;
  product_id: number;
  name: string;
  original_name?: string;
  size: number;
  url: string;
  width: number;
  height: number;
  mime_type: string;
  remote_url?: string;
  remote_id: string;
  created_at: string;
  updated_at: string;
}

export interface Pagination {
  total: number;
  nextPageUrl: string | null | 'empty';
}

export interface HasMoreData {
  key: 'hasMoreProducts' | 'hasMoreCollections';
  value: boolean;
}

export interface PaginationUpdate {
  key: 'productPagination' | 'collectionPagination';
  value: Pagination;
}

export interface SearchResults {
  products: Product[];
  collections: Collection[];
}

export interface SearchTag {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}
