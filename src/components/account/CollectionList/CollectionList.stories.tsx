import React from 'react';
import db from '@REST/mocks/db.json';
import MockProvider from '@core/providers/MockProvider';
import { ComponentStory } from '@storybook/react';
import CollectionList from './';

export default {
  title: 'components/Account/CollectionList',
  component: CollectionList,
  decorators: [
    (story: () => any) => (
      <MockProvider preloadedState={{}}>{story()}</MockProvider>
    ),
  ],
};

export const Default: ComponentStory<typeof CollectionList> = (args) => {
  return <CollectionList {...args} />;
};

Default.args = {
  list: db.orders.singleCollection.userProductsCollection.data as any,
};
