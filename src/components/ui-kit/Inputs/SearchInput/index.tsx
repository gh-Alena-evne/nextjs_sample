import React, { ChangeEventHandler } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import DefaultIcon from './DefaultIcon';

type SearchInputProps = {
  value?: string;
  focus?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  fullwidth?: boolean;
};

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  focus = false,
  onChange,
  error = false,
  helperText,
  disabled = false,
  fullwidth = false,
}) => {
  return (
    <TextField
      size={'small'}
      fullWidth={fullwidth}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      autoFocus={focus}
      disabled={disabled}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <DefaultIcon
              viewBox={'0 0 20 20'}
              sx={{
                color: value ? 'common.birch' : 'primary',
                opacity: value ? 1 : 0.3,
                fontSize: '24px',
              }}
            />
          </InputAdornment>
        ),
      }}
      placeholder={'Search'}
      variant="outlined"
    />
  );
};
