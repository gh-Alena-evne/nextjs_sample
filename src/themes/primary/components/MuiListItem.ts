import { Components, Theme } from '@mui/material';
import { Palette } from '@mui/material/styles/createPalette';
import { palette } from '../palette';

export const MuiListItem: Partial<Components<Theme>> = {
  MuiListItem: {
    styleOverrides: {
      root: {
        borderColor: '#575975',
        padding: '16px',
        '.MuiTypography-root': {
          fontSize: '14px',
          textTransform: 'uppercase',
        },

        '&:hover': {
          background: 'rgba(217, 223, 255, 0.1)',
          '.MuiTypography-root': {
            color: '#999BFF',
          },

          '.MuiSvgIcon-root': {
            fill: (palette as Palette).text.secondary,
          },
        },
        '.MuiButtonBase-root': {
          padding: 0,
        },
      },
    },
  },
};
