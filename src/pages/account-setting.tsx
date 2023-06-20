import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { mergeDeepRight } from 'ramda';
import * as React from 'react';
import { Container } from '@mui/material';
import { connectReduxStore } from '@helpers/connectReduxStore';

const DynamicAccountLayout = dynamic(() => import('../layouts/AccountLayout'));
const DynamicSettings = dynamic(() => import('@components/account/Settings'));

const AccountSettingPage = () => {
  return (
    <DynamicAccountLayout>
      <Container sx={{ padding: '20px' }}>
        <DynamicSettings />
      </Container>
    </DynamicAccountLayout>
  );
};

export default AccountSettingPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { store, stateUpdates, isAuth } = await connectReduxStore(context, []);

  const state = {
    auth: {
      profile: store.getState().auth.profile,
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
