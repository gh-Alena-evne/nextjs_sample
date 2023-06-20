import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const GridIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props} width="40" height="40" viewBox="0 0 40 40">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 8C21.8954 8 21 8.89543 21 10V13C21 14.1046 21.8954 15 23 15H30C31.1046 15 32 14.1046 32 13V10C32 8.89543 31.1046 8 30 8H23ZM10 25C8.89543 25 8 25.8954 8 27V30C8 31.1046 8.89543 32 10 32H17C18.1046 32 19 31.1046 19 30V27C19 25.8954 18.1046 25 17 25H10ZM21 19C21 17.8954 21.8954 17 23 17H30C31.1046 17 32 17.8954 32 19V30C32 31.1046 31.1046 32 30 32H23C21.8954 32 21 31.1046 21 30V19ZM10 8C8.89543 8 8 8.89543 8 10V21C8 22.1046 8.89543 23 10 23H17C18.1046 23 19 22.1046 19 21V10C19 8.89543 18.1046 8 17 8H10Z"
        fill="url(#paint0_linear_108_16474)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_108_16474"
          x1="14.6396"
          y1="8"
          x2="18.6353"
          y2="32.565"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#D838FF" />
          <stop offset="0.510417" stopColor="#C183FF" />
          <stop offset="1" stopColor="#7E31DF" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
};

export default GridIcon;
