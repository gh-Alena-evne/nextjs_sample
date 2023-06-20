import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const RadioIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon
      {...props}
      sx={{ fontSize: '16px' }}
      width={'16px'}
      height={'16px'}>
      <rect
        x="0.5"
        y="1"
        width="15"
        height="15"
        rx="7.5"
        stroke="#5B52E7"
        fill={'transparent'}
      />
    </SvgIcon>
  );
};

export default RadioIcon;
