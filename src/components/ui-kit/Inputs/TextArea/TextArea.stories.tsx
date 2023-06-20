import React from 'react';
import { action } from '@storybook/addon-actions';
import { ComponentStory } from '@storybook/react';
import { TextArea } from './';
import defaultOverlay from './Empty.png';
import focusOverlay from './Empty.png';
import disabledOverlay from './Empty.png';
import errorOverlay from './Error.png';

export default {
  title: 'Inputs/TextArea',
  component: TextArea,
};

export const Default: ComponentStory<typeof TextArea> = (args) => {
  return <TextArea {...args} />;
};

Default.args = {
  label: 'Label',
  onChange: action('onChange'),
};
Default.parameters = {
  assets: [defaultOverlay],
};

export const Focused: ComponentStory<typeof TextArea> = (args) => {
  return <TextArea {...args} />;
};

Focused.args = {
  ...Default.args,
  focus: true,
};
Focused.parameters = {
  assets: [focusOverlay],
};

export const Disabled: ComponentStory<typeof TextArea> = (args) => {
  return <TextArea {...args} />;
};

Disabled.args = {
  ...Default.args,
  disabled: true,
};
Disabled.parameters = {
  assets: [disabledOverlay],
};

export const IsError: ComponentStory<typeof TextArea> = (args) => {
  return <TextArea {...args} />;
};

IsError.args = {
  ...Default.args,
  error: true,
  helperText: 'helper_text_info',
};
IsError.parameters = {
  assets: [errorOverlay],
};

export const Filled: ComponentStory<typeof TextArea> = (args) => {
  return <TextArea {...args} />;
};

Filled.args = {
  ...Default.args,
  value: 'Placeholder',
};
