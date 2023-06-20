import { Components, Theme } from '@mui/material';

export const MuiTab: Partial<Components<Theme>> = {
  MuiTab: {
    styleOverrides: {
      root: {
        color: '#67717E',
        padding: '16px',

        '&.Mui-selected': {
          color: '#999BFF',
          borderBottom: '2px solid #5B52E7',
        },
      },
    },
    defaultProps: {
      disableRipple: true,
    },
  },
};
