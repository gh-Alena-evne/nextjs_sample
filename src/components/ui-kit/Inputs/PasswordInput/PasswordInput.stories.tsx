import React from 'react';
import { action } from '@storybook/addon-actions';
import { ComponentStory } from '@storybook/react';
import { PasswordInput } from './index';

export default {
  title: 'Inputs/PasswordInput',
  component: PasswordInput,
};

export const Default: ComponentStory<typeof PasswordInput> = (args) => (
  <PasswordInput {...args} />
);
Default.args = {
  label: 'Password',
  showPassword: false,
  setShowPassword: action('setShowPassword'),
  onChange: action('onChange'),
};

export const Filled: ComponentStory<typeof PasswordInput> = (args) => (
  <PasswordInput {...args} />
);
Filled.args = {
  ...Default.args,
  value: '123452',
};

export const PasswordVisible: ComponentStory<typeof PasswordInput> = (args) => (
  <PasswordInput {...args} />
);
PasswordVisible.args = {
  ...Default.args,
  value: '123452',
  showPassword: true,
};
