import React from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';
import { ButtonColors, ButtonVariants } from '../../../themes/primary/typetefs';

export interface ButtonProps extends MuiButtonProps {
  variant?: ButtonVariants;
  color?: ButtonColors;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <MuiButton {...props}>{children}</MuiButton>;
};

export default Button;
