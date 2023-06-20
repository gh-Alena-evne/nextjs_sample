import { Theme } from '@mui/material';

export const styles = {
  root: {
    height: 'calc(100vh - 80px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  status: {
    fontSize: '205px',
    fontWeight: 300,
    lineHeight: '105%',
    letterSpacing: '-0.015em',
  },
  wrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    top: '-35px',
    left: '-20px',
    zIndex: 1,
  },
  text: (theme: Theme) => ({
    width: '70px',
    padding: '10px 8px 10px 10px',
    background: theme.palette.common.white,
    borderRadius: '10px 10px 10px 0px',
    margin: '0 0 5px 60px',
    alignSelf: 'flex-start',
  }),
  background: (theme: Theme) => ({
    background: theme.palette.common.darkBlue,
    opacity: 0.6,
    position: 'absolute',
    width: '100vw',
    height: 'calc(100vh - 80px)',
  }),
  video: {
    '& video': {
      minWidth: '100%',
      minHeight: '100%',
    },
  },
};
