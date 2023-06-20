import { Components, Theme } from '@mui/material';

export const MuiSvgIcon: Partial<Components<Theme>> = {
  MuiSvgIcon: {
    defaultProps: {
      fontSize: 'medium',
      htmlColor: 'white',
    },
    variants: [
      {
        props: {
          fontSize: 'medium',
        },
        style: {
          fontSize: '32px',
          width: '32px',
          height: '32px',
        },
      },
      {
        props: {
          fontSize: 'small',
        },
        style: {
          fontSize: '24px',
          width: '24px',
          height: '24px',
        },
      },
      {
        props: {
          fontSize: 'large',
        },
        style: {
          fontSize: '40px',
          width: '40px',
          height: '40px',
        },
      },
    ],
  },
};
