import { Components, Theme } from '@mui/material';

export const MuiMenu: Partial<Components<Theme>> = {
  MuiMenu: {
    styleOverrides: {},
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        padding: '8px',

        '&:hover': {
          backgroundColor: 'rgba(217, 223, 255, 0.1)',
        },
        '&.Mui-selected': {
          backgroundColor: 'rgba(217, 223, 255, 0.1)',
          '&:hover': {
            backgroundColor: 'rgba(217, 223, 255, 0.1)',
          },
        },
      },
    },
  },
};
