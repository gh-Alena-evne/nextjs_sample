import { Theme } from '@mui/material';

export const styles = {
  root: {
    width: '580px',
    '@media(max-width: 667px)': {
      maxWidth: '100%',
    },
  },
  buttonWrapper: (theme: Theme) => ({
    display: 'flex',
    gap: '16px',
    padding: '20px',
    borderTop: `1px solid ${theme.palette.common.lightGrey}`,
    background: theme.palette.common['Dark/Surface/Surface 3'],
  }),
};
