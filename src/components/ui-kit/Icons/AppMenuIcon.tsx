import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const AppMenuIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.24997 12C2.24997 11.5858 2.58576 11.25 2.99997 11.25H21C21.4142 11.25 21.75 11.5858 21.75 12C21.75 12.4143 21.4142 12.75 21 12.75H2.99997C2.58576 12.75 2.24997 12.4143 2.24997 12Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.24997 6.00012C2.24997 5.58591 2.58576 5.25012 2.99997 5.25012H21C21.4142 5.25012 21.75 5.58591 21.75 6.00012C21.75 6.41434 21.4142 6.75012 21 6.75012H2.99997C2.58576 6.75012 2.24997 6.41434 2.24997 6.00012Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.24997 18.0001C2.24997 17.5859 2.58576 17.2501 2.99997 17.2501H21C21.4142 17.2501 21.75 17.5859 21.75 18.0001C21.75 18.4143 21.4142 18.7501 21 18.7501H2.99997C2.58576 18.7501 2.24997 18.4143 2.24997 18.0001Z"
      />
    </SvgIcon>
  );
};

export default AppMenuIcon;
