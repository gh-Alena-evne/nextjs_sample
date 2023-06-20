import React from 'react';
import { IconButton } from '@mui/material';
import CartIconV1 from '@components/ui-kit/Icons/CartIconV1';
import CartIcon from '@components/ui-kit/Icons/CartIconV2';
import MockProvider from '@core/providers/MockProvider';
import { ComponentStory } from '@storybook/react';
import Badge from './';

export default {
  title: 'components/Ui-kit/Badge',
  component: Badge,
  decorators: [
    (story: () => any) => {
      return <MockProvider preloadedState={{}}>{story()}</MockProvider>;
    },
  ],
};

export const Default: ComponentStory<typeof Badge> = (args) => {
  return <Badge {...args} />;
};

Default.args = {
  total: 1,
  icon: <CartIcon htmlColor={'white'} />,
  color: 'error',
};

export const BadgeIconButton: ComponentStory<typeof Badge> = (args) => {
  return <Badge {...args} />;
};

BadgeIconButton.args = {
  total: 1,
  icon: (
    <IconButton color={'default'}>
      <CartIconV1 />
    </IconButton>
  ),
  color: 'error',
};
