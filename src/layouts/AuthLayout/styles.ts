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
  wrapper: {
    '& header': {
      position: 'sticky',
      top: 0,
    },
  },
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
