import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const LogOutIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <g clipPath="url(#clip0_1355_75067)">
        <path d="M7 7L8.4 8.4L5.8 11H16V13H5.8L8.4 15.6L7 17L2 12L7 7ZM20 19H12V21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H12V5H20V19Z" />
      </g>
      <defs>
        <clipPath id="clip0_1355_75067">
          <rect width="24" height="24" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default LogOutIcon;
