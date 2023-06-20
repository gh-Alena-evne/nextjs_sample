import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const RightArrowIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <g clipPath="url(#clip0_551_12324)">
        <path
          d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z"
          fill="#999BFF"
        />
      </g>
      <defs>
        <clipPath id="clip0_551_12324">
          <rect width="24" height="24" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default RightArrowIcon;
