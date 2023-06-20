import { Components, Theme } from '@mui/material';

export const MuiButton: Partial<Components<Theme>> = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '50px',
        padding: '14px 24px',
        lineHeight: '16px',
        letterSpacing: '0.0125em',
        boxSizing: 'border-box',
        height: '48px',

        '&.SecondaryHover:hover': {
          background: '#5B52E7',
        },

        '.MuiButton-endIcon': {
          fontSize: '24px',
        },

        '&:hover': {
          '.MuiButton-endIcon': {
            '.useStroke': {
              stroke: '#999BFF',
            },
            '.useFill:not(.noHover)': {
              fill: '#999BFF',
            },
          },
        },

        '&.Mui-disabled': {
          background: '#33354D',
          color: '#67717E',
        },
      },
    },
    defaultProps: {
      variant: 'contained',
      color: 'primary',
      disableRipple: true,
      disableElevation: true,
    },
    variants: [
      {
        props: { variant: 'primary' },
        style: (theme) => ({
          border: 'none',
          borderRadius: '50px',
          background: theme.theme.palette.common.lightGrey,
          '&:hover': {
            background: theme.theme.palette.common['Dark/Gray/2'],
          },
          '&:focus': {
            border: 'none',
            background: theme.theme.palette.common.lightGrey,
          },
        }),
      },
      {
        props: { variant: 'primary', color: 'successDiscount' },
        style: (theme) => ({
          background: theme.theme.palette.common.green,
          '&:hover': {
            background: theme.theme.palette.common.green,
          },
          '&:focus': {
            background: theme.theme.palette.common.green,
          },
        }),
      },
      {
        props: { variant: 'primary', color: 'info' },
        style: (theme) => ({
          background: theme.theme.palette.common['Dark/Primary/1'],
          '&:hover': {
            background: theme.theme.palette.common['Dark/Primary/2'],
          },
          '&:focus': {
            background: theme.theme.palette.common['Dark/Primary/0'],
          },
        }),
      },
      {
        props: { variant: 'secondary' },
        style: {
          border: '1px solid #575975',
          borderRadius: '50px',
          '&:hover': {
            background: 'none',
            color: '#999BFF',
          },
          '&:focus': {
            border: '1px solid #5B52E7',
            color: '#999BFF',
          },
        },
      },
      {
        props: { variant: 'secondary', color: 'primary' },
        style: (theme) => ({
          border: `1px solid ${theme.theme.palette.common.lightGrey}`,
          color: theme.theme.palette.common['Dark/Text/Links'],
          '&:hover': {
            background: 'none',
            border: `1px solid ${theme.theme.palette.common.purple}`,
            color: theme.theme.palette.common['Dark/Text/Links'],
          },
          '&:focus': {
            border: `1px solid ${theme.theme.palette.common.purple}`,
            color: theme.theme.palette.common['Dark/Text/Links'],
          },
        }),
      },
      {
        props: { variant: 'secondary', color: 'info' },
        style: (theme) => ({
          border: `1px solid ${theme.theme.palette.common.lightGrey}`,
          color: theme.theme.palette.common.white,
          '&:hover': {
            background: 'none',
            color: theme.theme.palette.common['Dark/Text/Links'],
          },
          '&:focus': {
            border: `1px solid ${theme.theme.palette.common.purple}`,
            color: theme.theme.palette.common['Dark/Text/Links'],
          },
        }),
      },
      {
        props: { variant: 'contained', color: 'primary' },
        style: ({ theme }) => ({
          '&:hover': {
            background: '#999BFF',
          },
          '&:active': {
            background: '#362EB8',
          },
          '&.Mui-disabled': {
            '& .MuiButton-endIcon': {
              '& path': {
                fill: theme.palette.common['Dark/Text/Disabled'],
              },
            },
          },
        }),
      },
      {
        props: { variant: 'outlined', color: 'primary' },
        style: {
          color: '#999BFF',
          borderColor: '#575975',
          '&:hover': {
            background: 'none',
            borderColor: '#5B52E7',
          },
        },
      },
      {
        props: { variant: 'contained', color: 'secondary' },
        style: {
          background: '#575975',
          '&:hover': {
            background: '#3D405C',
          },
        },
      },
      {
        props: { variant: 'outlined', color: 'secondary' },
        style: ({ theme }) => ({
          color: '#fff',
          borderColor: '#575975',
          '&:hover': {
            background: 'none',
            color: ' #999BFF',
            borderColor: '#575975',
          },
          '&.Mui-disabled': {
            background: 'none',
            borderColor: '#575975',
            color: theme.palette.common['Dark/Text/Disabled'],
          },
        }),
      },
      {
        props: { variant: 'contained', disabled: true },
        style: {
          background: '#33354D',
          color: '#67717E',
        },
      },
      {
        props: { variant: 'contained', endIcon: true },
        style: {
          borderRadius: '10px',
        },
      },
      {
        props: { variant: 'contained', color: 'success' },
        style: {
          background: '#41CC00',
          color: '#fff',

          '&:hover': {
            background: '#4CAD1F',
          },
        },
      },
      {
        props: { variant: 'smallRadius' },
        style: ({ theme }) => ({
          // justifyContent: 'space-between',
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '16.41px',
          minWidth: 200,
          height: '64px',
          background: theme.palette.common['Dark/Surface/Surface 3'],
          borderRadius: 10,
          color: theme.palette.common.white,
          paddingLeft: '16px',
          paddingRight: '8px',
          '&:hover, &.hover': {
            background: theme.palette.common['Dark/Hover/1'],
            color: theme.palette.common['Dark/Text/Links'],
          },
        }),
      },
      {
        props: { variant: 'smallRadius', color: 'primary' },
        style: ({ theme }) => ({
          justifyContent: 'space-between',
          '& .MuiButton-endIcon': {
            margin: 0,
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `1px solid ${theme.palette.common.lightGrey}`,
          },
          '&:hover, &.hover': {
            background: theme.palette.common['Dark/Hover/1'],
            color: theme.palette.common['Dark/Text/Links'],
            '& .MuiButton-endIcon': {
              '& path': {
                fill: theme.palette.common['Dark/Text/Links'],
                transition: 'fill 200ms',
              },
            },
          },
        }),
      },
      {
        props: { variant: 'smallRadius', color: 'secondary' },
        style: ({ theme }) => ({
          justifyContent: 'space-between',
          background: theme.palette.common.purple,
          '& .MuiButton-endIcon': {
            margin: 0,
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `1px solid ${theme.palette.common['Dark/Text/Links']}`,
          },
          '&:hover, &.hover': {
            background: theme.palette.common.purple,
            color: theme.palette.common.white,
          },
        }),
      },
      {
        props: { variant: 'circle' },
        style: ({ theme }) => ({
          minWidth: 'initial',
          height: '48px',
          width: '48px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `1px solid ${theme.palette.common.lightGrey}`,
          background: 'none',
          '& .MuiButton-startIcon': {
            margin: 0,
          },
          '&:hover, &.hover': {
            background: 'none',
            border: `1px solid ${theme.palette.common.purple}`,
            color: theme.palette.common['Dark/Text/Links'],
          },
          '&:focus': {
            border: `1px solid ${theme.palette.common.purple}`,
            color: theme.palette.common['Dark/Text/Links'],
          },
        }),
      },
      {
        props: { variant: 'circle', color: 'secondary' },
        style: ({ theme }) => ({
          minWidth: 'initial',
          height: '48px',
          width: '48px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `1px solid ${theme.palette.common.lightGrey}`,
          background: 'none',
          '& .MuiButton-startIcon': {
            margin: 0,
            '& .MuiSvgIcon-root': {
              '& path': {
                transition: 'all 300ms',
              },
            },
          },
          '&:hover, &.hover': {
            background: 'none',
            border: `1px solid ${theme.palette.common.lightGrey}`,
            '& .MuiButton-startIcon': {
              margin: 0,
              '& .MuiSvgIcon-root': {
                '& path': {
                  fill: theme.palette.common['Dark/Text/Links'],
                },
              },
            },
          },
          '&:focus': {
            border: `1px solid ${theme.palette.common.purple}`,
            color: theme.palette.common['Dark/Text/Links'],
          },
        }),
      },
      {
        props: { variant: 'text', color: 'primary' },
        style: ({ theme }) => ({
          minWidth: 'initial',
          height: 'max-content',
          textTransform: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'none',
          padding: 0,
          color: theme.palette.common['Dark/Text/Links'],
          '&:hover, &.hover': {},
          '&:focus': {},
        }),
      },
    ],
  },
};
