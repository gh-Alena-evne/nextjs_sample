import { Theme } from '@mui/material';

export const styles = {
  formControl: {
    width: '100%',
  },
  select: {
    height: 'auto !important',

    '& span': {
      whiteSpace: 'break-spaces',
    },
  },
  listbox: (theme: Theme) => ({
    maxWidth: '503px',
    '& .MuiButtonBase-root': {
      '&.Mui-disabled': {
        '& .MuiTypography-root': {
          color: theme.palette.common.darkGray,
        },
      },
    },
  }),
};
