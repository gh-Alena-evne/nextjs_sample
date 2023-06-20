import React from 'react';
import AttentionIcon from '@components/ui-kit/Icons/AttentionIcon';
import { action } from '@storybook/addon-actions';
import { ComponentStory } from '@storybook/react';
import MockProvider from '../../../core/providers/MockProvider';
import { ConfirmOrCancel } from './index';

export default {
  title: 'modals/ConfirmDelete',
  component: ConfirmOrCancel,
  decorators: [
    (Story: () => any) => (
      <MockProvider preloadedState={{}}>{Story()}</MockProvider>
    ),
  ],
};

export const Default: ComponentStory<typeof ConfirmOrCancel> = (args) => {
  return <ConfirmOrCancel {...args} />;
};

Default.args = {
  text: 'Are you sure you want to delete this question?',
  onConfirm: action('onConfirm'),
  cancelButton: {
    text: 'No',
  },
  confirmButton: {
    text: 'Yes',
  },
};

export const ConfirmDeleteCartItem: ComponentStory<typeof ConfirmOrCancel> = (
  args,
) => {
  return <ConfirmOrCancel {...args} />;
};

ConfirmDeleteCartItem.args = {
  onConfirm: action('onConfirm'),
  subtitle: {
    icon: AttentionIcon,
    title: 'Confirm action',
    subtitle: 'Are You sure you want to remove this from shopping cart?',
  },
  cancelButton: {
    text: 'No',
  },
  confirmButton: {
    text: 'Yes',
  },
};
