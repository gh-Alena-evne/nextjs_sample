import React from 'react';
import { ComponentStory } from '@storybook/react';
import { Radiobutton } from './';

export default {
  title: 'Inputs/Radiobutton',
  component: Radiobutton,
};

export const Default: ComponentStory<typeof Radiobutton> = (args) => {
  return <Radiobutton {...args} />;
};

Default.args = {
  value: 'value',
};

export const WithLabel: ComponentStory<typeof Radiobutton> = (args) => {
  return <Radiobutton {...args} />;
};

WithLabel.args = {
  value: 'value',
  label: 'value',
};
