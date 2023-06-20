import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const DotIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon
      {...props}
      className="useFill"
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none">
      <circle cx="4" cy="4" r="2" fill="white" />
    </SvgIcon>
  );
};

export default DotIcon;
