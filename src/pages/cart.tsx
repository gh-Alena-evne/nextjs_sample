import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { mergeDeepRight } from 'ramda';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { Box, Container } from '@mui/material';
import { getCart } from '@bus/cart/selectors';
import { productActions } from '@bus/product/actions';
import { styles } from '@components/cart/styles';
import { connectReduxStore } from '@helpers/connectReduxStore';

const DynamicAppLayout = dynamic(() => import('../layouts/AppLayout'));
const DynamicCartHeader = dynamic(() => import('@components/cart/CartHeader'));
const DynamicCheckout = dynamic(() => import('@components/cart/Checkout'));
const DynamicEmptyCart = dynamic(() => import('@components/cart/EmptyCart'));

type ProductPageProps = {};

const ProductPage: React.FC<ProductPageProps> = () => {
  const cart = useSelector(getCart);

  return (
    <DynamicAppLayout>
      <Container
        sx={[styles.root, !!cart.data.length && styles.paddingWrapper]}>
        {cart.data.length ? (
          <DynamicCheckout cartData={cart.data} />
        ) : (
          <>
            <Box mb={'40px'}>
              <DynamicCartHeader total={cart.data.length} />
            </Box>
            <DynamicEmptyCart />
          </>
        )}
      </Container>
    </DynamicAppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { store, stateUpdates } = await connectReduxStore(context, [
    {
      action: productActions.getCollection,
      payload: { collectionId: Number(context?.params?.id) },
    },
  ]);

  const pageState = mergeDeepRight(stateUpdates, {
    product: {
      cart: store.getState().cart,
    },
  });

  return {
    props: {
      initialReduxState: pageState,
    },
  };
};

export default ProductPage;
