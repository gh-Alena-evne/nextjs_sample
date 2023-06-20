import React from 'react';
import { ComponentStory } from '@storybook/react';
import NotFound from './index';

export default {
  title: 'components/NotFound/NotFound',
  component: NotFound,
};

export const Default: ComponentStory<typeof NotFound> = (args) => {
  return <NotFound {...args} />;
};

Default.args = {};
