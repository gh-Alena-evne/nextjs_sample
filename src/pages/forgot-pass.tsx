import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import * as React from 'react';

const DynamicAuthLayout = dynamic(() => import('../layouts/AuthLayout'));
const DynamicForgotPassword = dynamic(
  () => import('@components/forgotPassword/ForgotPassword'),
);

type ForgotPasswordPageProps = {};

const ForgotPasswordPage: NextPage<ForgotPasswordPageProps> = () => {
  return (
    <DynamicAuthLayout>
      <DynamicForgotPassword />
    </DynamicAuthLayout>
  );
};

export default ForgotPasswordPage;
