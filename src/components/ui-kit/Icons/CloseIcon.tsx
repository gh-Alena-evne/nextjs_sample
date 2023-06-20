import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const CloseIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.10566 5.10575C5.39855 4.81286 5.87342 4.81286 6.16632 5.10575L18.8942 17.8337C19.1871 18.1266 19.1871 18.6014 18.8942 18.8943C18.6013 19.1872 18.1265 19.1872 17.8336 18.8943L5.10566 6.16641C4.81276 5.87352 4.81276 5.39865 5.10566 5.10575Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.10565 18.8943C4.81275 18.6014 4.81275 18.1266 5.10565 17.8337L17.8336 5.10575C18.1265 4.81285 18.6013 4.81285 18.8942 5.10575C19.1871 5.39864 19.1871 5.87351 18.8942 6.16641L6.16631 18.8943C5.87341 19.1872 5.39854 19.1872 5.10565 18.8943Z"
      />
    </SvgIcon>
  );
};

export default CloseIcon;
