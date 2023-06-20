import React from 'react';
import { action } from '@storybook/addon-actions';
import { ComponentStory } from '@storybook/react';
import { TextField } from './';
import disabledImage from './Disabled.png';
import errorOverlay from './Error.png';
import fillOverlay from './Fill.png';
import focusOverlay from './Focus.png';
import overlay from './text.png';

export default {
  title: 'Inputs/TextField',
  component: TextField,
};

export const Default: ComponentStory<typeof TextField> = (args) => {
  return <TextField {...args} />;
};

Default.args = {
  label: 'Label',
  onChange: action('onChange'),
};
Default.parameters = {
  assets: [overlay],
};

export const Focused: ComponentStory<typeof TextField> = (args) => {
  return <TextField {...args} />;
};

Focused.args = {
  ...Default.args,
  focus: true,
};
Focused.parameters = {
  assets: [focusOverlay],
};

export const Disabled: ComponentStory<typeof TextField> = (args) => {
  return <TextField {...args} />;
};

Disabled.args = {
  ...Default.args,
  disabled: true,
};
Disabled.parameters = {
  assets: [disabledImage],
};

export const IsError: ComponentStory<typeof TextField> = (args) => {
  return <TextField {...args} />;
};

IsError.args = {
  ...Default.args,
  error: true,
  helperText: 'helper_text_info',
};
IsError.parameters = {
  assets: [errorOverlay],
};

export const Filled: ComponentStory<typeof TextField> = (args) => {
  return <TextField {...args} />;
};

Filled.args = {
  ...Default.args,
  value: 'Placeholder',
};
Filled.parameters = {
  assets: [fillOverlay],
};
