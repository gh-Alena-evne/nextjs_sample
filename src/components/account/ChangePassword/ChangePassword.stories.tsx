import React from 'react';
import MockProvider from '@core/providers/MockProvider';
import { ComponentStory } from '@storybook/react';
import ChangePassword from './';

export default {
  title: 'components/Account/ChangePassword',
  component: ChangePassword,
  decorators: [
    (story: () => any) => {
      return <MockProvider preloadedState={{}}>{story()}</MockProvider>;
    },
  ],
};

export const Default: ComponentStory<typeof ChangePassword> = (args) => {
  return <ChangePassword {...args} />;
};

Default.args = {};
