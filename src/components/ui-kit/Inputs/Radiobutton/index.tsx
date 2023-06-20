import React from 'react';
import { FormControlLabel, Radio } from '@mui/material';

type RadiobuttonProps = {
  label?: string;
  value: string;
  testId?: string;
};

export const Radiobutton: React.FC<RadiobuttonProps> = ({
  label,
  value,
  testId,
}) => {
  return (
    <FormControlLabel
      value={value}
      control={<Radio data-testid={testId} />}
      label={label}
    />
  );
};
