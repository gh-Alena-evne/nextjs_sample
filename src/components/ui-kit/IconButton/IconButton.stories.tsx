import React from 'react';
import EditPencilIcon from '@components/ui-kit/Icons/EditPencilIcon';
import FolderIcon from '@components/ui-kit/Icons/FolderIcon';
import { ComponentStory } from '@storybook/react';
import IconButton from './index';

export default {
  title: 'components/Ui-kit/IconButton',
  component: IconButton,
};

export const Default: ComponentStory<typeof IconButton> = (args) => {
  return <IconButton {...args} />;
};

Default.args = {
  children: <FolderIcon />,
  color: 'default',
};

export const DefaultHover: ComponentStory<typeof IconButton> = (args) => {
  return <IconButton {...args} />;
};

DefaultHover.args = {
  ...Default.args,
  className: 'hover',
};

export const Secondary: ComponentStory<typeof IconButton> = (args) => {
  return <IconButton {...args} />;
};

Secondary.args = {
  children: <EditPencilIcon fontSize={'small'} />,
  color: 'secondary',
};
