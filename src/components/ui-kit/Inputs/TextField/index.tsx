import React from 'react';
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material';

type TextFieldProps = {
  focus?: boolean;
} & MuiTextFieldProps;

export const TextField: React.FC<TextFieldProps> = ({
  value,
  onChange,
  focus = false,
  disabled = false,
  error = false,
  label,
  helperText,
  fullWidth = false,
  onBlur,
  ...props
}) => {
  return (
    <MuiTextField
      value={value}
      autoComplete={'off'}
      fullWidth={fullWidth}
      onChange={onChange}
      label={label}
      error={error}
      onBlur={
        onBlur ? (event) => setTimeout(() => onBlur(event), 100) : undefined
      }
      helperText={helperText}
      variant="outlined"
      autoFocus={focus}
      disabled={disabled}
      {...props}
    />
  );
};
