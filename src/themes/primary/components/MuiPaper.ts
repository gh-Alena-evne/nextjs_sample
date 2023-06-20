import { Components, Theme } from '@mui/material';

export const MuiPaper: Partial<Components<Theme>> = {
  MuiPaper: {
    styleOverrides: {
      root: {
        background: '#282536',
        borderRadius: '10px',
      },
    },
  },
};
