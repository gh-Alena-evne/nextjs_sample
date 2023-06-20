import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Divider, Typography } from '@mui/material';
import { authActions } from '@bus/auth/actions';
import { getProfile } from '@bus/auth/selectors';
import { uiActions } from '@bus/ui/actions';
import { schema } from '@components/forms/ChangeAccountPasswordForm/schema';
import { OnFormSubmitPayload } from '@setup/typedefs';
import { styles } from './styles';

const DynamicSuccessChangePasswordIcon = dynamic(
  () => import('@components/ui-kit/Icons/SuccessChangePasswordIcon'),
);

const DynamicChangeAccountPasswordForm = dynamic(
  () => import('@components/forms/ChangeAccountPasswordForm'),
);

const DynamicFinalForm = dynamic(() => import('@core/FinalForm'));

type ChangePasswordProps = {};

const ChangePassword: React.FC<ChangePasswordProps> = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const profile = useSelector(getProfile);
  const handleSubmitSuccess = () => {
    dispatch(
      uiActions.modal({
        modalName: 'SuccessOrFailed',
        modalPayload: {
          icon: <DynamicSuccessChangePasswordIcon />,
          title: 'Success!',
          subtitle1: 'The Password has been changed',
          cancelButton: {
            text: 'Okay',
            onCancel: () => {
              router.push('/');
            },
          },
          isCloseButton: true,
        },
      }),
    );
  };

  const handleSubmit = (payload: OnFormSubmitPayload) => {
    dispatch(
      authActions.changePassword({
        ...payload,
        values: {
          password: payload.values.password,
          oldPassword: payload.values.oldPassword,
          email: profile?.email,
        },
      }),
    );
  };

  return (
    <Box sx={styles.root}>
      <Box sx={styles.wrapper}>
        <Typography variant={'h3'}>Change Password</Typography>
        <Divider sx={styles.divider} />
        <Typography
          variant={'body1'}
          color={'common.Dark/Text/Secondary'}
          textAlign={'left'}>
          Enter old and new password to proceed
        </Typography>
      </Box>
      <Box sx={styles.formWrapper}>
        <DynamicFinalForm
          onSubmitSuccess={handleSubmitSuccess}
          schema={schema}
          onSubmit={handleSubmit}
          initialValues={{}}
          component={(props) => <DynamicChangeAccountPasswordForm {...props} />}
        />
      </Box>
    </Box>
  );
};

export default ChangePassword;
