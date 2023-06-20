import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { mergeDeepRight } from 'ramda';
import * as React from 'react';
import { Container } from '@mui/material';
import { ordersActions } from '@bus/orders/actions';
import { connectReduxStore } from '@helpers/connectReduxStore';

const DynamicAccountLayout = dynamic(() => import('../layouts/AccountLayout'));
const DynamicCollections = dynamic(
  () => import('@components/account/Collections'),
);

const AccountCollectionsPage = () => {
  return (
    <DynamicAccountLayout>
      <Container sx={{ padding: '20px' }}>
        <DynamicCollections />
      </Container>
    </DynamicAccountLayout>
  );
};

export default AccountCollectionsPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { store, stateUpdates, isAuth } = await connectReduxStore(context, [
    {
      action: ordersActions.fetchCollections,
    },
  ]);

  const state = {
    auth: {
      profile: store.getState().auth.profile,
    },
    orders: {
      collections: store.getState().orders.collections,
    },
  };

  return {
    props: {
      initialReduxState: mergeDeepRight(stateUpdates, state),
    },
    redirect: isAuth
      ? undefined
      : {
          permanent: false,
          destination: '/log-in',
        },
  };
};
