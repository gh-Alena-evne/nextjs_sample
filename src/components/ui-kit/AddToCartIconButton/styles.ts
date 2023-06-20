import { Theme } from '@mui/material';

export const styles = {
  root: (theme: Theme) => ({
    backgroundColor: 'transparent',
    borderColor: theme.palette.common.lightGrey,
    '&:hover': {
      backgroundColor: theme.palette.common.grey,
      borderColor: theme.palette.common.lightGrey,
    },
  }),
  inCart: (theme: Theme) => ({
    backgroundColor: theme.palette.common.green,
    borderColor: theme.palette.common.green,

    '&:hover': {
      backgroundColor: theme.palette.common.greenHover,
      borderColor: theme.palette.common.greenHover,
    },
  }),
};
