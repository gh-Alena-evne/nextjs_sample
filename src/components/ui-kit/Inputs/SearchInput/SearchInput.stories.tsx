import React from 'react';
import { action } from '@storybook/addon-actions';
import { ComponentStory } from '@storybook/react';
import { SearchInput } from './';
import disabledOverlay from './Disabled.png';
import defaultOverlay from './Empty.png';
import errorOverlay from './Error.png';
import fillOverlay from './Fill.png';
import focusOverlay from './Focuse.png';

export default {
  title: 'Inputs/SearchInput',
  component: SearchInput,
};

export const Default: ComponentStory<typeof SearchInput> = (args) => {
  return <SearchInput {...args} />;
};

Default.args = {
  onChange: action('onChange'),
  value: '',
};
Default.parameters = {
  assets: [defaultOverlay],
};

export const Focused: ComponentStory<typeof SearchInput> = (args) => {
  return <SearchInput {...args} />;
};

Focused.args = {
  ...Default.args,
  focus: true,
};
Focused.parameters = {
  assets: [focusOverlay],
};

export const Disabled: ComponentStory<typeof SearchInput> = (args) => {
  return <SearchInput {...args} />;
};

Disabled.args = {
  ...Default.args,
  disabled: true,
};
Disabled.parameters = {
  assets: [disabledOverlay],
};

export const IsError: ComponentStory<typeof SearchInput> = (args) => {
  return <SearchInput {...args} />;
};

IsError.args = {
  ...Default.args,
  error: true,
  helperText: 'helper_text_info',
};
IsError.parameters = {
  assets: [errorOverlay],
};

export const Filled: ComponentStory<typeof SearchInput> = (args) => {
  return <SearchInput {...args} />;
};

Filled.args = {
  ...Default.args,
  value: 'Search Request',
};
Filled.parameters = {
  assets: [fillOverlay],
};
