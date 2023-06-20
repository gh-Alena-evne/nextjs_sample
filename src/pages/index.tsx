import { GetServerSideProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { mergeDeepRight } from 'ramda';
import * as React from 'react';
import { Container, Divider, Typography } from '@mui/material';
import { ordersActions } from '@bus/orders/actions';
import { productActions } from '@bus/product/actions';
import { styles } from '@components/common/AppBanner/styles';
import { connectReduxStore } from '@helpers/connectReduxStore';

const DynamicImageGallery = dynamic(
  () => import('../components/home/ImageGallery'),
);

const DynamicAppBanner = dynamic(() => import('@components/common/AppBanner'));

const DynamicTrendingCollections = dynamic(
  () => import('@components/home/TrendingCollections'),
);

const DynamicMainSearch = dynamic(
  () => import('@components/common/MainSearch'),
);

const DynamicAppLayout = dynamic(() => import('../layouts/AppLayout'));

type IndexPageProps = {};

const IndexPage: NextPage<IndexPageProps> = () => {
  return (
    <DynamicAppLayout>
      <DynamicAppBanner>
        <Typography variant="h3" component="h3" sx={{ mb: '10px' }}>
          Manifest. Edit. Remix. Your Imagination
        </Typography>
        <Typography variant="body1" component="h6">
          You now can buy and even restyle the best images in the world, add
          value and boost your Social Media, Videos and Visuals
        </Typography>
      </DynamicAppBanner>
      <Container>
        <DynamicMainSearch />
      </Container>
      <Divider sx={{ mt: '24px' }} />
      <Container>
        <DynamicTrendingCollections />
      </Container>
      <Divider sx={styles.divider} />
      <Container>
        <DynamicImageGallery />
      </Container>
    </DynamicAppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { store, stateUpdates } = await connectReduxStore(context, [
    { action: productActions.getProducts },
    { action: productActions.getCollections },
    { action: productActions.getTags },
    { action: productActions.getTrendingCollections },
    { action: ordersActions.fetchCollections },
  ]);

  const state = {
    product: {
      collections: store.getState().product.collections,
      trendingProductCollection:
        store.getState().product.trendingProductCollection,
      products: store.getState().product.products,
      searchTags: store.getState().product.searchTags,
    },
    orders: {
      collections: store.getState().orders.collections,
      imagesInCollection: store.getState().orders.imagesInCollection,
    },
  };

  return {
    props: {
      initialReduxState: mergeDeepRight(stateUpdates, state),
    },
  };
};

export default IndexPage;
