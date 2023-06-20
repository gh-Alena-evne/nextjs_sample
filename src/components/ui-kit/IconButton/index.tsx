import React from 'react';
import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
} from '@mui/material';
import { IconButtonColors } from '../../../themes/primary/typetefs';

export interface IconButtonProps extends MuiIconButtonProps {
  color?: IconButtonColors;
}

const IconButton: React.FC<IconButtonProps> = ({ children, ...props }) => {
  return <MuiIconButton {...props}>{children}</MuiIconButton>;
};

export default IconButton;
