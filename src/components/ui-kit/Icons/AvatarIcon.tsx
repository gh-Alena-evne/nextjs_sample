import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const AvatarIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <circle cx="16" cy="16" r="14" strokeWidth="2" />
      <circle cx="16" cy="12" r="5" strokeWidth="2" />
      <path
        d="M6.5 26.5C7.16667 23.5 9 17.5 16 17.5C23 17.5 24.5 23.5 25.5 26.5"
        strokeWidth="2"
      />
    </SvgIcon>
  );
};

export default AvatarIcon;
