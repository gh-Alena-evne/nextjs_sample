import React from 'react';
import { Box, FormHelperText as MuiFormHelperText } from '@mui/material';
import AttentionIcon from '@components/ui-kit/Icons/AttentionIcon';
import { styles } from './styles';

type FormHelperTextProps = {
  error: any;
};

export const FormHelperText: React.FC<FormHelperTextProps> = ({ error }) => {
  if (error && (typeof error === 'string' || Array.isArray(error))) {
    return (
      <Box sx={styles.root}>
        <AttentionIcon htmlColor={'#AD1F1F'} />
        <MuiFormHelperText error={!!error}>
          {error || error[0]}
        </MuiFormHelperText>
      </Box>
    );
  }

  return null;
};
