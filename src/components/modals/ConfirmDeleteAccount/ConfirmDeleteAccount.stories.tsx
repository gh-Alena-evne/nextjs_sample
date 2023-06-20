import React from 'react';
import MockProvider from '@core/providers/MockProvider';
import { ComponentStory } from '@storybook/react';
import { ConfirmDeleteAccount } from './';

export default {
  title: 'modals/ConfirmDeleteAccount',
  component: ConfirmDeleteAccount,
  decorators: [
    (story: () => any) => {
      return <MockProvider preloadedState={{}}>{story()}</MockProvider>;
    },
  ],
};

export const Default: ComponentStory<typeof ConfirmDeleteAccount> = (args) => {
  return <ConfirmDeleteAccount {...args} />;
};

Default.args = {};
