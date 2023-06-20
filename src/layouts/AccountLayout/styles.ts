import { Theme } from '@mui/material';

export const styles = {
  root: (theme: Theme) => ({
    height: 'calc(100vh - 80px)',
    [theme.breakpoints.down('tablet')]: {
      height: 'initial',
      flexDirection: 'column-reverse',
      '& .MuiGrid-item': {
        maxWidth: '100%',
        width: '100%',
      },
    },
  }),
  wrapper: (theme: Theme) => ({
    transform: 'translateY(-120px)',
    [theme.breakpoints.down('tablet')]: {
      display: 'none',
    },
  }),
  container: (theme: Theme) => ({
    display: 'flex',
    [theme.breakpoints.down('tablet')]: {
      flexDirection: 'column',
      padding: 0,
    },
  }),
  mobileWrapper: (theme: Theme) => ({
    display: 'none',
    [theme.breakpoints.down('tablet')]: {
      display: 'block',
    },
  }),
  parallaxWrapper: {
    '& > div': {
      overflow: 'visible!important',
    },
  },
  titleWrapper: (theme: Theme) => ({
    position: 'fixed',
    right: 0,
    [theme.breakpoints.down('lg')]: {
      position: 'static',
    },
  }),
};
