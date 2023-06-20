import React, { ChangeEventHandler } from 'react';
import { TextField } from '@mui/material';
import { styles } from './styles';

type TextAreaProps = {
  focus?: boolean;
  disabled?: boolean;
  error?: boolean;
  label: string;
  helperText?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  fullWidth?: boolean;
  testId?: string;
  rows?: number;
};

export const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  focus,
  disabled,
  error,
  label,
  helperText,
  fullWidth = false,
  testId,
  rows = 5,
}) => {
  return (
    <TextField
      multiline
      variant="outlined"
      sx={styles.root}
      inputProps={{ 'data-testid': testId }}
      fullWidth={fullWidth}
      value={value}
      onChange={onChange}
      label={label}
      error={error}
      helperText={helperText}
      autoFocus={focus}
      disabled={disabled}
      rows={rows}
    />
  );
};
