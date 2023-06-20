import React, { ChangeEventHandler, FocusEventHandler } from 'react';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import VisibilityToggleOffIcon from '../../Icons/VisibilityToggleOffIcon';
import VisibilityToggleOnIcon from '../../Icons/VisibilityToggleOnIcon';

export type PasswordFieldProps = {
  value: string;
  label?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  setShowPassword: (bool: boolean) => void;
  showPassword: boolean;
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
  testId?: string;
  placeholder?: string;
  sx?: React.CSSProperties;
  onBlur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

export const PasswordInput: React.FC<PasswordFieldProps> = ({
  value,
  onChange,
  setShowPassword,
  showPassword,
  label,
  error,
  helperText,
  fullWidth,
  testId,
  onBlur,
  placeholder,
  ...rest
}) => {
  return (
    <FormControl fullWidth={fullWidth} variant="outlined" error={error}>
      {label && (
        <InputLabel
          htmlFor={`outlined-adornment-password-${label
            .toLowerCase()
            .replace(/ /g, '-')}`}>
          {label}
        </InputLabel>
      )}
      <OutlinedInput
        placeholder={placeholder}
        fullWidth={fullWidth}
        autoComplete={'new-password'}
        id={`outlined-adornment-password-${
          label || ''.toLowerCase().replace(/ /g, '-')
        }`}
        type={showPassword ? 'text' : 'password'}
        value={value}
        onBlur={(event) => setTimeout(() => onBlur(event), 100)}
        inputProps={{ 'data-testid': testId }}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              onMouseDown={(event: React.MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
              }}
              color={'secondary'}
              edge="end">
              {showPassword ? (
                <VisibilityToggleOnIcon
                  fontSize={'small'}
                  htmlColor={'#999BFF'}
                />
              ) : (
                <VisibilityToggleOffIcon
                  fontSize={'small'}
                  htmlColor={'#999BFF'}
                />
              )}
            </IconButton>
          </InputAdornment>
        }
        label={label}
        {...rest}
      />
      {error && <FormHelperText error={error}>{helperText}</FormHelperText>}
    </FormControl>
  );
};
