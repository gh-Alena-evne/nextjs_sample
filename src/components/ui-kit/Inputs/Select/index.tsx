import React, { ReactNode } from 'react';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SelectChangeEvent,
} from '@mui/material';
import { SelectItemValue } from '@components/cart/CartItem/SelectItemValue';
import DropDownIcon from '@components/ui-kit/Icons/DropDownIcon';
import { styles } from './styles';

type SelectProps = {
  opened?: boolean;
  disabled?: boolean;
  options: any;
  label?: string;
  error?: boolean;
  helperText?: string;
  value: string | undefined;
  onChange: (event: SelectChangeEvent, child: ReactNode) => void;
  fullWidth?: boolean;
  displayEmpty?: boolean;
  testId?: string;
  defaultValue?: any;
  disabledOption?: number;
  onBlur?: () => void;
};

export const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  opened = false,
  disabled = false,
  options,
  label,
  error = false,
  helperText,
  fullWidth = false,
  testId,
  defaultValue,
  displayEmpty = true,
  disabledOption,
  onBlur,
}) => {
  const getPriceVariant = (id: string | number) => {
    return options?.find((price: any) => price.id === Number(id));
  };

  return (
    <FormControl
      data-testid={testId}
      variant={'outlined'}
      disabled={disabled}
      error={error}
      fullWidth={fullWidth}>
      {label && <InputLabel>{label}</InputLabel>}
      <MuiSelect
        renderValue={(value) => (
          <SelectItemValue value={getPriceVariant(value)} />
        )}
        displayEmpty={displayEmpty}
        onBlur={onBlur}
        value={value}
        role={testId}
        onChange={onChange}
        defaultValue={defaultValue}
        sx={styles.select}
        MenuProps={{
          sx: styles.listbox,
        }}
        IconComponent={(props) => (
          <DropDownIcon {...props} fontSize={'small'} />
        )}
        defaultOpen={opened}>
        {options?.map((item: any) => {
          return (
            <MenuItem
              key={item.id}
              value={item.id}
              disabled={item.id === disabledOption}>
              <SelectItemValue value={item} />
            </MenuItem>
          );
        })}
      </MuiSelect>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
