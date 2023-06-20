import React from 'react';
import {
  FormControlLabel,
  FormHelperText,
  Checkbox as MuiCheckbox,
  Typography,
  TypographyTypeMap,
} from '@mui/material';
import CheckedIcon from '@components/ui-kit/Inputs/Checkbox/CheckedIcon';
import DefaultIcon from '@components/ui-kit/Inputs/Checkbox/DefaultIcon';
import { styles } from './styles';

type CheckboxProps = {
  checked?: boolean;
  onChange?: (e: boolean) => void;
  label?: string;
  error?: boolean;
  helperText?: string;
  labelVariant?: TypographyTypeMap['props']['variant'];
};

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  error,
  helperText,
  labelVariant = 'body1',
  ...props
}) => {
  return (
    <>
      <FormControlLabel
        {...props}
        checked={checked}
        control={
          <MuiCheckbox
            sx={styles.root}
            icon={<DefaultIcon />}
            checkedIcon={<CheckedIcon />}
            onChange={() => {
              onChange && onChange(!checked);
            }}
          />
        }
        label={
          label && (
            <Typography variant={labelVariant} color={'common.white'}>
              {label}
            </Typography>
          )
        }
      />
      {error && <FormHelperText error={error}>{helperText}</FormHelperText>}
    </>
  );
};
