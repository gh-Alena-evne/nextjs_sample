import { Components, Theme } from '@mui/material';

export const MuiIconButton: Partial<Components<Theme>> = {
  MuiIconButton: {
    defaultProps: {
      disableRipple: true,
      size: 'medium',
      color: 'primary',
    },
    variants: [
      {
        props: { size: 'medium' },
        style: {
          width: '48px',
          height: '48px',
          boxSizing: 'border-box',
        },
      },
      {
        props: { size: 'small' },
        style: {
          width: '44px',
          height: '44px',
          boxSizing: 'border-box',
        },
      },
      {
        props: { color: 'primary' },
        style: {
          background: '#5B52E7',
          '&:hover': {
            background: '#999BFF',
            borderColor: '#999BFF',
          },
          '&:active': {
            background: '#362EB8',
            borderColor: '#362EB8',
          },
          '&.Mui-disabled': {
            background: '#33354D',
            borderColor: '#33354D',
            cursor: 'default',
            pointerEvents: 'all',

            '&.MuiSvgIcon-root': {
              color: '#67717E',
            },
          },
        },
      },
      {
        props: { color: 'default' },
        style: {
          color: 'white',
          border: '1px solid',
          borderColor: '#575975',
          '&:hover, .hover': {
            background: '#5B52E7',
            borderColor: '#5B52E7',
          },
          '&:active': {
            background: '#362EB8',
            borderColor: '#362EB8',
          },
          '&.Mui-disabled': {
            background: '#33354D',
            borderColor: '#33354D',
          },
        },
      },
      {
        props: { color: 'secondary' },
        style: ({ theme }) => ({
          borderRadius: '10px',
          background: 'none',
          '&:hover': {
            background: theme.palette.common['Dark/Hover/1'],
          },
        }),
      },
    ],
  },
};
