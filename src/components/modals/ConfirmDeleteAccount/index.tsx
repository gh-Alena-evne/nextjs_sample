import React from 'react';
import { useDispatch } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { uiActions } from '@bus/ui/actions';
import Button from '@components/ui-kit/ButtonWithIcon';
import ConfirmDeleteAccountIcon from '@components/ui-kit/Icons/ConfirmDeleteAccountIcon';
import { styles } from './styles';

type ConfirmDeleteAccountProps = {};

export const ConfirmDeleteAccount: React.FC<ConfirmDeleteAccountProps> = () => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(uiActions.closeModal());
  };

  return (
    <Box sx={styles.root}>
      <Box sx={styles.wrapper}>
        <ConfirmDeleteAccountIcon />
        <Typography
          variant={'subtitle1'}
          mb={'8px'}
          mt={'24px'}
          lineHeight={'19px'}
          textAlign={'center'}
          maxWidth={'150px'}>
          Are you sure?
        </Typography>
        <Typography
          variant={'body1'}
          color={'common.Dark/Text/Secondary'}
          textAlign={'center'}>
          Do you really want to delete the account?
        </Typography>
        <Typography
          variant={'body1'}
          color={'common.Dark/Text/Secondary'}
          textAlign={'center'}>
          This process cannot be undone
        </Typography>
      </Box>
      <Box sx={styles.buttonWrapper}>
        <Button variant={'outlined'} color={'secondary'} onClick={closeModal}>
          Delete account
        </Button>
        <Button onClick={closeModal}>Cancel</Button>
      </Box>
    </Box>
  );
};
