import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { mergeDeepRight } from 'ramda';
import * as React from 'react';
import { connectReduxStore } from '@helpers/connectReduxStore';

const DynamicChangePassword = dynamic(
  () => import('@components/account/ChangePassword'),
);
const DynamicAuthLayout = dynamic(() => import('../layouts/AuthLayout'));

const AccountChangePasswordPage = () => {
  return (
    <DynamicAuthLayout>
      <DynamicChangePassword />
    </DynamicAuthLayout>
  );
};

export default AccountChangePasswordPage;

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
