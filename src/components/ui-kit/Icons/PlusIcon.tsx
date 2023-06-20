import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const PlusIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <g clipPath="url(#clip0_727_80055)">
        <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
      </g>
      <defs>
        <clipPath id="clip0_727_80055">
          <rect width="24" height="24" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default PlusIcon;
