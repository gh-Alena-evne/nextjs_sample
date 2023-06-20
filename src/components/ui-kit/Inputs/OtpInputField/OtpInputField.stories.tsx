import React from 'react';
import { action } from '@storybook/addon-actions';
import { ComponentStory } from '@storybook/react';
import { OtpInputField } from './';

export default {
  title: 'Inputs/OtpInputField',
  component: OtpInputField,
};

export const Default: ComponentStory<typeof OtpInputField> = (args) => {
  return <OtpInputField {...args} />;
};

Default.args = {
  onChange: action('onChange'),
  placeholder: '-----',
  numInputs: 5,
};

export const Disabled: ComponentStory<typeof OtpInputField> = (args) => {
  return <OtpInputField {...args} />;
};

Disabled.args = {
  ...Default.args,
  value: '12345',
  isDisabled: true,
};

export const IsError: ComponentStory<typeof OtpInputField> = (args) => {
  return <OtpInputField {...args} />;
};

IsError.args = {
  ...Default.args,
  hasErrored: true,
  errorText: 'error_text_info',
};

export const Filled: ComponentStory<typeof OtpInputField> = (args) => {
  return <OtpInputField {...args} />;
};

Filled.args = {
  ...Default.args,
  value: '12345',
};
