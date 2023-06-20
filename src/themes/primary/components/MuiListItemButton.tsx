import { Components, Theme } from '@mui/material';

export const MuiListItemButton: Partial<Components<Theme>> = {
  MuiListItemButton: {
    styleOverrides: {
      root: {
        '&:hover': {
          background: 'none',
        },
      },
    },
    defaultProps: {
      disableRipple: true,
    },
  },
};
