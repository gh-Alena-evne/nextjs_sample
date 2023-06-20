import { Pagination } from '@bus/product/typedefs';

export const checkHasMore = (pagination: Pagination) => {
  const url = pagination.nextPageUrl;

  return !!(url || url === 'empty');
};

export const defineRequestUrl = (
  pagination: Pagination,
  searchQuery?: string,
) => {
  let requestUrl: string;
  if (pagination.nextPageUrl && pagination.nextPageUrl !== 'empty') {
    if (searchQuery) {
      requestUrl = `${pagination.nextPageUrl}&search=${searchQuery}`;
    } else {
      requestUrl = pagination.nextPageUrl;
    }
  } else {
    if (searchQuery) {
      requestUrl = `/products?search=${searchQuery}`;
    } else {
      requestUrl = '/products';
    }
  }

  return requestUrl;
};
