import dynamic from 'next/dynamic';
import * as React from 'react';

const DynamicAuthLayout = dynamic(() => import('../layouts/AuthLayout'));
const DynamicSignIn = dynamic(() => import('@components/signIn/SignIn'));

const LogInPage = () => {
  return (
    <DynamicAuthLayout>
      <DynamicSignIn />
    </DynamicAuthLayout>
  );
};

export default LogInPage;
