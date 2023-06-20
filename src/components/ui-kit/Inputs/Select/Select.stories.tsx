import React from 'react';
import { action } from '@storybook/addon-actions';
import { ComponentStory } from '@storybook/react';
import { Select } from './';

const countryList = [
  {
    id: 1,
    name: 'Type',
    amount: 123,
    description: 'Description',
  },
  {
    id: 2,
    name: 'Type',
    amount: 456,
    description: 'Description',
  },
  {
    id: 3,
    name: 'Type',
    amount: 789,
    description: 'Description',
  },
  {
    id: 4,
    name: 'Type',
    amount: 0,
    description: 'Description',
  },
];

export default {
  title: 'Inputs/Select',
  component: Select,
};

export const Default: ComponentStory<typeof Select> = (args) => {
  return <Select {...args} />;
};

Default.args = {
  options: countryList,
  opened: false,
  disabled: false,
  onChange: action('onChange'),
  fullWidth: true,
};

export const Opened: ComponentStory<typeof Select> = (args) => {
  return <Select {...args} />;
};

Opened.args = {
  options: countryList,
  opened: true,
  disabled: false,
  fullWidth: true,
};

export const IsError: ComponentStory<typeof Select> = (args) => {
  return <Select {...args} />;
};

IsError.args = {
  options: countryList,
  error: true,
  helperText: 'Unselected Type',
  fullWidth: true,
};

export const Disabled: ComponentStory<typeof Select> = (args) => {
  return <Select {...args} />;
};

Disabled.args = {
  options: countryList,
  disabled: true,
  fullWidth: true,
};

export const DisabledOption: ComponentStory<typeof Select> = (args) => {
  return <Select {...args} />;
};

DisabledOption.args = {
  options: countryList,
  disabledOption: 2,
  opened: true,
  fullWidth: true,
};

export const Filled: ComponentStory<typeof Select> = (args) => {
  return <Select {...args} />;
};

Filled.args = {
  options: countryList,
  value: '1',
  fullWidth: true,
};
