import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { mergeDeepRight } from 'ramda';
import * as React from 'react';
import { Container, Divider } from '@mui/material';
import { productActions } from '@bus/product/actions';
import { connectReduxStore } from '@helpers/connectReduxStore';

const DynamicAppLayout = dynamic(() => import('../layouts/AppLayout'));
const DynamicAppBanner = dynamic(() => import('@components/common/AppBanner'));
const DynamicMainSearch = dynamic(
  () => import('@components/common/MainSearch'),
);
const DynamicSearchResult = dynamic(
  () => import('@components/common/SearchResult'),
);

const SearchResultsPage = () => {
  return (
    <DynamicAppLayout>
      <DynamicAppBanner className="noContent" />
      <Container>
        <DynamicMainSearch />
      </Container>
      <Divider sx={{ mt: '24px' }} />
      <Container>
        <DynamicSearchResult />
      </Container>
    </DynamicAppLayout>
  );
};

export default SearchResultsPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { store, stateUpdates } = await connectReduxStore(context, [
    {
      action: productActions.getSearch,
      payload: { searchQuery: String(context.query.search) },
    },
    { action: productActions.getTags },
  ]);

  const state = {
    product: {
      collections: store.getState().product.collections,
      products: store.getState().product.products,
      searchTags: store.getState().product.searchTags,
    },
  };

  return {
    props: {
      initialReduxState: mergeDeepRight(stateUpdates, state),
    },
  };
};
