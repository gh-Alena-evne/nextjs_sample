import React from 'react';
import db from '@REST/mocks/db.json';
import MockProvider from '@core/providers/MockProvider';
import { RootState, Subset } from '@setup/typedefs';
import { ComponentStory } from '@storybook/react';
import Collection from './';

const initialState: Subset<RootState> = {
  orders: db.orders as unknown as RootState['orders'],
};

export default {
  title: 'components/Account/Collection',
  component: Collection,
  decorators: [
    (story: () => any) => {
      return (
        <MockProvider preloadedState={initialState}>{story()}</MockProvider>
      );
    },
  ],
};

export const Default: ComponentStory<typeof Collection> = (args) => {
  return <Collection {...args} />;
};

Default.args = {};
