import React from 'react';
import MockProvider from '@core/providers/MockProvider';
import { ComponentStory } from '@storybook/react';
import { FormHelperText } from './';

export default {
  title: 'components/Ui-kit/FormHelperText',
  component: FormHelperText,
  decorators: [
    (story: () => any) => {
      return <MockProvider preloadedState={{}}>{story()}</MockProvider>;
    },
  ],
};

export const Default: ComponentStory<typeof FormHelperText> = (args) => {
  return <FormHelperText {...args} />;
};

Default.args = {};
