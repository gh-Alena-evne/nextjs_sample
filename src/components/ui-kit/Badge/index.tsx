import React from 'react';
import { Badge as MuiBadge } from '@mui/material';
import { BadgeColors } from '../../../themes/primary/typetefs';

type BadgeProps = {
  total: number;
  color: BadgeColors;
  icon: React.ReactNode;
};

const Badge: React.FC<BadgeProps> = ({ color, icon, total }) => {
  return (
    <MuiBadge badgeContent={total} color={color}>
      {icon}
    </MuiBadge>
  );
};

export default Badge;
