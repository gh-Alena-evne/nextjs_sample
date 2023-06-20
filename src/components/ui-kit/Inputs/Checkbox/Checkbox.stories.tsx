import React from 'react';
import { action } from '@storybook/addon-actions';
import { ComponentStory } from '@storybook/react';
import { Checkbox } from './';

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,
};

export const Default: ComponentStory<typeof Checkbox> = (args) => {
  return <Checkbox {...args} />;
};

Default.args = {
  checked: false,
  onChange: action('onChange'),
};

export const Checked: ComponentStory<typeof Checkbox> = (args) => {
  return <Checkbox {...args} />;
};

Checked.args = {
  ...Default.args,
  checked: true,
};
