import { Components, Theme } from '@mui/material';

export const MuiContainer: Partial<Components<Theme>> = {
  MuiContainer: {
    styleOverrides: {
      root: {
        paddingLeft: '20px',
        paddingRight: '20px',
      },
    },
    defaultProps: {
      maxWidth: 'lg',
    },
  },
};
