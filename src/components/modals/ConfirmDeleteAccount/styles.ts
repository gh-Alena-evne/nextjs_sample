import { Theme } from '@mui/material';

export const styles = {
  root: (theme: Theme) => ({
    width: '416px',
    [theme.breakpoints.down('mobile')]: {
      maxWidth: '100%',
    },
  }),
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '32px 20px 0 20px',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: '24px 20px',
    boxSizing: 'border-box',
    gap: '10px',
    '& > button': {
      maxWidth: '183px',
      width: '100%',
    },
  },
};
