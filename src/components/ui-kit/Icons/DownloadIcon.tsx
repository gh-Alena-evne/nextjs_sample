import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const DownloadIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <g clipPath="url(#clip0_1051_63635)">
        <path d="M19 9H15V3H9V9H5L12 16L19 9ZM11 11V5H13V11H14.17L12 13.17L9.83 11H11ZM5 18H19V20H5V18Z" />
      </g>
      <defs>
        <clipPath id="clip0_1051_63635">
          <rect width="24" height="24" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default DownloadIcon;
