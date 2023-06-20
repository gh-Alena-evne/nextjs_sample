import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const DropDownIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <g clipPath="url(#clip0_3286_70541)">
        <path
          d="M7.41 8.59003L12 13.17L16.59 8.59003L18 10L12 16L6 10L7.41 8.59003Z"
          fill="#999BFF"
        />
      </g>
      <defs>
        <clipPath id="clip0_3286_70541">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default DropDownIcon;
