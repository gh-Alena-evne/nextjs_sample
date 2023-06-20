import React from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';
import { uiActions } from '@bus/ui/actions';
import { styles } from './styles';

type ConfirmDeleteProps = {
  text?: string;
  onConfirm: () => void;
  onCancel?: () => void;
  confirmButton?: {
    text?: string;
    icon?: any;
    disableIcon?: boolean;
  };
  cancelButton?: {
    text?: string;
    icon?: any;
  };
  subtitle?: {
    icon?: any;
    title?: string;
    subtitle?: string;
  };
};

export const ConfirmOrCancel: React.FC<ConfirmDeleteProps> = ({
  onConfirm,
  onCancel,
  text,
  confirmButton,
  cancelButton,
  subtitle,
}) => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(uiActions.closeModal());
  };

  return (
    <Box
      sx={styles.root}
      display={'flex'}
      flexDirection={'column'}
      m={'32px 32px 24px 32px'}
      alignItems={'center'}
      maxWidth={'352px'}>
      {text && (
        <Box>
          <Typography variant={'h5'}>{text}</Typography>
        </Box>
      )}
      {subtitle && (
        <Box display={'flex'} gap={'16px'}>
          <Box>{React.createElement(subtitle.icon)}</Box>
          <Box>
            <Typography variant={'subtitle1'} lineHeight={'initial'} mb={'8px'}>
              {subtitle.title}
            </Typography>
            <Typography
              variant={'body2'}
              lineHeight={'initial'}
              color={'common.Dark/Text/Secondary'}>
              {subtitle.subtitle}
            </Typography>
          </Box>
        </Box>
      )}
      <Box display={'flex'} gap={'10px'} mt={'24px'} alignSelf={'flex-end'}>
        <Button
          onClick={() => {
            closeModal();
            onCancel && onCancel();
          }}
          variant={'secondary'}
          color={'primary'}>
          {cancelButton?.text || 'Cancel'}
        </Button>
        <Button color={'primary'} onClick={onConfirm}>
          {confirmButton?.text || 'Delete'}
        </Button>
      </Box>
    </Box>
  );
};
