import React from 'react';
import MockProvider from '@core/providers/MockProvider';
import { ComponentStory } from '@storybook/react';
import { PaginationList } from './';

export default {
  title: 'components/Ui-kit/PaginationList',
  component: PaginationList,
  decorators: [
    (story: () => any) => {
      return <MockProvider preloadedState={{}}>{story()}</MockProvider>;
    },
  ],
};

export const Default: ComponentStory<typeof PaginationList> = (args) => {
  return <PaginationList {...args} />;
};

Default.args = {};
