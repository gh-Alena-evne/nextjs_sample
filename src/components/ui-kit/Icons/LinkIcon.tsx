import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const LinkIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <g clipPath="url(#clip0_447_13931)">
        <path d="M7 17L11 17L11 15L7 15C5.35 15 4 13.65 4 12C4 10.35 5.35 9 7 9L11 9L11 7L7 7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17ZM13 9L17 9C18.65 9 20 10.35 20 12C20 13.65 18.65 15 17 15L13 15L13 17L17 17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7L13 7L13 9ZM16 13L8 13L8 11L16 11L16 13Z" />
      </g>
      <defs>
        <clipPath id="clip0_447_13931">
          <rect
            width="24"
            height="24"
            transform="translate(24 24) rotate(-180)"
          />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default LinkIcon;
