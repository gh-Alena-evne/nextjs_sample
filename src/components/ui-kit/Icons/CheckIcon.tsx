import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const CheckIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <g clipPath="url(#clip0_1012_13786)">
        <path d="M9.00039 16.2L4.80039 12L3.40039 13.4L9.00039 19L21.0004 7L19.6004 5.6L9.00039 16.2Z" />
      </g>
      <defs>
        <clipPath id="clip0_1012_13786">
          <rect width="24" height="24" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default CheckIcon;
