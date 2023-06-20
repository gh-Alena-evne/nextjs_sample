import React from 'react';
import { SvgIcon } from '@mui/material';

const DefaultIcon = () => {
  return (
    <SvgIcon
      sx={{ fontSize: '16px', width: '16px', height: '16px' }}
      width={16}
      height={16}
      viewBox={'0 0 16 16'}>
      <rect
        x="0.5"
        y="0.5"
        width="15"
        height="15"
        rx="1.5"
        stroke="#575975"
        fill="none"
      />
    </SvgIcon>
  );
};

export default DefaultIcon;
