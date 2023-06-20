import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { mergeDeepRight } from 'ramda';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography, useMediaQuery } from '@mui/material';
import { productActions } from '@bus/product/actions';
import { getAllCollectionsTotal } from '@bus/product/selectors';
import { styles } from '@components/allCollections/styles';
import { connectReduxStore } from '@helpers/connectReduxStore';

const DynamicAppLayout = dynamic(() => import('../layouts/AppLayout'));
const DynamicTitle = dynamic(() => import('@components/allCollections/Title'));
const DynamicAllCollectionsList = dynamic(
  () => import('@components/allCollections/AllCollectionsList'),
);

type ProductPageProps = {};

const AllCollectionPage: React.FC<ProductPageProps> = () => {
  const total = useSelector(getAllCollectionsTotal);
  const isMobile = useMediaQuery('(max-width:767px)');

  return (
    <DynamicAppLayout>
      <Container sx={styles.title}>
        <DynamicTitle
          total={total}
          title={isMobile ? 'Collections' : 'All Collections'}
        />
      </Container>
      <Container sx={styles.subTitle}>
        <Typography variant={'body1'}>
          Discover the best content on Dream Engine
        </Typography>
      </Container>
      <Container sx={{ marginBottom: '40px' }}>
        <DynamicAllCollectionsList />
      </Container>
    </DynamicAppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { store, stateUpdates } = await connectReduxStore(context, [
    {
      action: productActions.getAllTrendingCollections,
    },
  ]);

  const pageState = mergeDeepRight(stateUpdates, {
    product: {
      allTrendingProductCollection:
        store.getState().product.allTrendingProductCollection,
    },
  });

  return {
    props: {
      initialReduxState: pageState,
    },
  };
};

export default AllCollectionPage;
