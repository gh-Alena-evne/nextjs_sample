import React from 'react';
import MockProvider from '@core/providers/MockProvider';
import { ComponentStory } from '@storybook/react';
import { AddToCollection } from './';

export default {
  title: 'modals/AddToCollection',
  component: AddToCollection,
  decorators: [
    (story: () => any) => {
      return <MockProvider preloadedState={{}}>{story()}</MockProvider>;
    },
  ],
};

export const Default: ComponentStory<typeof AddToCollection> = (args) => {
  return <AddToCollection {...args} />;
};

Default.args = {};
