import { Theme } from '@mui/material';

export const styles = {
  root: (theme: Theme) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: '0 20px',
    [theme.breakpoints.down('tablet')]: {
      padding: '30px 20px',
    },
  }),
  wrapper: (theme: Theme) => ({
    maxWidth: '550px',
    width: '100%',
    [theme.breakpoints.down('lg')]: {
      maxWidth: '100%',
    },
  }),
  formWrapper: (theme: Theme) => ({
    maxWidth: '550px',
    width: '100%',
    marginTop: '40px',
    [theme.breakpoints.down('lg')]: {
      maxWidth: '100%',
    },
  }),
  divider: {
    margin: '10px 0',
  },
};
