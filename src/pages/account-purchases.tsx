import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { mergeDeepRight } from 'ramda';
import * as React from 'react';
import { Container } from '@mui/material';
import { ordersActions } from '@bus/orders/actions';
import { connectReduxStore } from '@helpers/connectReduxStore';

const DynamicAccountLayout = dynamic(() => import('../layouts/AccountLayout'));
const DynamicPurchases = dynamic(() => import('@components/account/Purchases'));

const AccountPurchasesPage = () => {
  return (
    <DynamicAccountLayout>
      <Container sx={{ padding: '20px' }}>
        <DynamicPurchases />
      </Container>
    </DynamicAccountLayout>
  );
};

export default AccountPurchasesPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { store, stateUpdates, isAuth } = await connectReduxStore(context, [
    {
      action: ordersActions.fetchPurchases,
    },
  ]);

  const state = {
    auth: {
      profile: store.getState().auth.profile,
    },
    orders: {
      purchases: store.getState().orders.purchases,
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
