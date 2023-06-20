import { Components, Theme } from '@mui/material';

export const MuiChip: Partial<Components<Theme>> = {
  MuiChip: {
    styleOverrides: {
      root: {
        background: '#333041',
        borderRadius: '8px',
        color: '#9DA4AF',
        fontSize: '14px',
        lineHeight: '16px',
        padding: '12px 8px',
        height: '40px',

        '&:hover': {
          background: 'rgba(217, 223, 255, 0.1)',
          color: '#999BFF',
        },
      },
      label: {
        padding: 0,
      },
    },
  },
};
