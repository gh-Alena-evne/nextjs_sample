import React from 'react';
import { ComponentStory } from '@storybook/react';
import MockProvider from '../../../../core/providers/MockProvider';
import { Link } from './index';

export default {
  title: 'Typography/Link',
  component: Link,
  decorators: [
    (story: () => any) => (
      <MockProvider preloadedState={{}} routeEntries={['/']}>
        {story()}
      </MockProvider>
    ),
  ],
};

export const Default: ComponentStory<typeof Link> = (args) => {
  return <Link {...args} />;
};

Default.args = {
  to: '/',
  children: 'Link',
  variant: 'inherit',
};
