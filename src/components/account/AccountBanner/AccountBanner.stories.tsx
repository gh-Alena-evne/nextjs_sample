import React from 'react';
import MockProvider from '@core/providers/MockProvider';
import { ComponentStory } from '@storybook/react';
import { AccountBanner } from './';

export default {
  title: 'components/Account/AccountBanner',
  component: AccountBanner,
  decorators: [
    (story: () => any) => {
      return <MockProvider preloadedState={{}}>{story()}</MockProvider>;
    },
  ],
};

export const Default: ComponentStory<typeof AccountBanner> = (args) => {
  return <AccountBanner {...args} />;
};

Default.args = {};
