import { Theme } from '@mui/material';

export const styles = {
  root: (theme: Theme) => ({
    display: 'flex',
    paddingLeft: '17px',
    gap: '6px',
    alignItems: 'center',
    mt: '4.83px',
    '& .MuiSvgIcon-root': {
      width: '13.33px',
      height: '13.33px',
      fontSize: '13.33px',
      '& path': {
        fill: theme.palette.common['Dark/Additional/Red 0'],
      },
    },
    '& p': {
      margin: 0,
      lineHeight: 'initial',
    },
  }),
};
