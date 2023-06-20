import { Components, Theme } from '@mui/material';

export const MuiAvatar: Partial<Components<Theme>> = {
  MuiAvatar: {
    defaultProps: {
      variant: 'circular',
      style: {
        width: '48px',
        height: '48px',
        border: '1px solid #575975',
        boxSizing: 'border-box',
        cursor: 'pointer',
      },
    },
    variants: [
      {
        props: {
          variant: 'circular',
        },
        style: {
          background: 'none',
          transition: 'background-color 150ms',
          '&:hover': {
            background: '#5B52E7',
          },
        },
      },
    ],
  },
};
