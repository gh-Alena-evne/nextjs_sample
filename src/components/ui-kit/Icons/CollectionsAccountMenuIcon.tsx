import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const CollectionsAccountMenuIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props} width={'32'} height={'32'} viewBox={'0 0 32 32'}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 4H4V28H28V4ZM4 2C2.89543 2 2 2.89543 2 4V28C2 29.1046 2.89543 30 4 30H28C29.1046 30 30 29.1046 30 28V4C30 2.89543 29.1046 2 28 2H4Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.2071 15.6213C22.8166 15.2308 22.1834 15.2308 21.7929 15.6213L15.6213 21.7929C14.4498 22.9645 12.5503 22.9645 11.3787 21.7929L9.20712 19.6213C8.8166 19.2308 8.18343 19.2308 7.79291 19.6213L3.70712 23.7071L2.29291 22.2929L6.37869 18.2071C7.55027 17.0355 9.44976 17.0355 10.6213 18.2071L12.7929 20.3787C13.1834 20.7692 13.8166 20.7692 14.2071 20.3787L20.3787 14.2071C21.5503 13.0355 23.4498 13.0355 24.6213 14.2071L29.7071 19.2929L28.2929 20.7071L23.2071 15.6213Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 13C12.1046 13 13 12.1046 13 11C13 9.89543 12.1046 9 11 9C9.89543 9 9 9.89543 9 11C9 12.1046 9.89543 13 11 13ZM11 15C13.2091 15 15 13.2091 15 11C15 8.79086 13.2091 7 11 7C8.79086 7 7 8.79086 7 11C7 13.2091 8.79086 15 11 15Z"
      />
    </SvgIcon>
  );
};

export default CollectionsAccountMenuIcon;
