import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import { TypographyProps as MuiTypographyProps } from '@mui/material/Typography/Typography';
import { styles } from './styles';

export interface LinkProps extends MuiTypographyProps {
  to?: string;
  onClick?: () => void;
  component?: React.ElementType;
}

export const Link: React.FC<LinkProps> = ({
  to,
  variant = 'body1',
  children,
  color,
  onClick,
  component = RouterLink,
}) => {
  return (
    <Typography
      sx={styles.root}
      to={to}
      component={component}
      variant={variant}
      color={color || 'primary'}
      onClick={onClick}>
      {children}
    </Typography>
  );
};
