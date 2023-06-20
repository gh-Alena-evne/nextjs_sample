import React from 'react';
import { ComponentStory } from '@storybook/react';
import { Switch } from './';

export default {
  title: 'Inputs/Switch',
  component: Switch,
};

export const Default: ComponentStory<typeof Switch> = (args) => {
  return <Switch {...args} />;
};

Default.args = {
  switched: false,
};

export const Switched: ComponentStory<typeof Switch> = (args) => {
  return <Switch {...args} />;
};

Switched.args = {
  switched: true,
};
