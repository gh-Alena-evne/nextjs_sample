import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const LeftArrowIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <g clipPath="url(#clip0_551_12327)">
        <path
          d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z"
          fill="#999BFF"
        />
      </g>
      <defs>
        <clipPath id="clip0_551_12327">
          <rect width="24" height="24" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default LeftArrowIcon;
