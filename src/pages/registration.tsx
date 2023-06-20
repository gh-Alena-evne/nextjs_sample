import dynamic from 'next/dynamic';
import * as React from 'react';

const DynamicAuthLayout = dynamic(() => import('../layouts/AuthLayout'));
const DynamicSignUp = dynamic(() => import('@components/signUp/SignUp'));

type RegistrationPageProps = {};

const RegistrationPage: React.FC<RegistrationPageProps> = () => {
  return (
    <DynamicAuthLayout>
      <DynamicSignUp />
    </DynamicAuthLayout>
  );
};

export default RegistrationPage;
