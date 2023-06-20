import React from 'react';
import { Switch as MuiSwitch } from '@mui/material';

type SwitchProps = {
  switched: boolean;
};

export const Switch: React.FC<SwitchProps> = ({ switched }) => {
  return <MuiSwitch checked={switched} />;
};
