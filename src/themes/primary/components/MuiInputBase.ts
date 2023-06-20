import { Components, Theme } from '@mui/material';

export const MuiInputBase: Partial<Components<Theme>> = {
  MuiInputBase: {
    styleOverrides: {
      root: {
        background: '#333041',
        lineHeight: '18.75px',
        height: 'auto',

        '&.MuiInputBase-formControl:hover': {
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: '#575975',
          },
        },

        '&.Mui-focused': {
          background: '#13111E',

          '.MuiOutlinedInput-notchedOutline': {
            borderColor: '#5B52E7',
          },

          '&:hover': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: '#5B52E7',
            },
          },
        },

        '&.MuiInputBase-multiline': {
          height: 'auto',
          padding: 'initial',
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        height: 'auto',
        borderRadius: '10px',
        color: '#9DA4AF',
      },
      input: ({ theme }) => ({
        padding: '15px 16px 14px',
        height: 'auto',
        '&.Mui-disabled': {
          '-webkit-text-fill-color': theme.palette.common['Dark/Text/Disabled'],
        },
      }),
      notchedOutline: {
        // borderColor: '#575975',
      },
    },
  },
};
