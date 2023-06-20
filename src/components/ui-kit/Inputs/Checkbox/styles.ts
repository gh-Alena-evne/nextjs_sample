import { Theme } from '@mui/material';

export const styles = {
  root: (theme: Theme) => ({
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&.MuiCheckbox-root:not(.Mui-checked)': {
      '&:hover': {
        '& .MuiSvgIcon-root': {
          '& rect': {
            stroke: theme.palette.common['Dark/Primary/1'],
          },
        },
      },
      '& .MuiTouchRipple-root': {
        display: 'none',
      },
    },
  }),
};
