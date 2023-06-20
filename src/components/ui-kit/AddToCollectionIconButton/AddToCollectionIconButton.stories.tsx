import React from 'react';
import { action } from '@storybook/addon-actions';
import { ComponentStory } from '@storybook/react';
import AddToCollectionIconButton from './';

export default {
  title: 'components/Ui-kit/AddToCollectionIconButton',
  component: AddToCollectionIconButton,
};

export const Default: ComponentStory<typeof AddToCollectionIconButton> = (
  args,
) => {
  return <AddToCollectionIconButton {...args} />;
};

Default.args = {
  onClick: action('onClick'),
  isInCollection: false,
};

export const AddedToCollection: ComponentStory<
  typeof AddToCollectionIconButton
> = (args) => {
  return <AddToCollectionIconButton {...args} />;
};

AddedToCollection.args = {
  onClick: action('onClick'),
  isInCollection: true,
};
