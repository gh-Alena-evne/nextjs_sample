import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const HomeIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <g clipPath="url(#clip0_2540_197342)">
        <path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69ZM12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z" />
      </g>
      <defs>
        <clipPath id="clip0_2540_197342">
          <rect width="24" height="24" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default HomeIcon;
