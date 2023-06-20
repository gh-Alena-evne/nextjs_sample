import React from 'react';
import { action } from '@storybook/addon-actions';
import { ComponentStory } from '@storybook/react';
import AddToCartIconButton from './';
import img from './img.png';

export default {
  title: 'components/Ui-kit/AddToCartIconButton',
  component: AddToCartIconButton,
  parameters: {
    assets: [img],
  },
};

export const Default: ComponentStory<typeof AddToCartIconButton> = (args) => {
  return <AddToCartIconButton {...args} />;
};

Default.args = {
  onClick: action('onClick'),
  isInCart: false,
};

export const AddedToCart: ComponentStory<typeof AddToCartIconButton> = (
  args,
) => {
  return <AddToCartIconButton {...args} />;
};

AddedToCart.args = {
  onClick: action('onClick'),
  isInCart: true,
};
