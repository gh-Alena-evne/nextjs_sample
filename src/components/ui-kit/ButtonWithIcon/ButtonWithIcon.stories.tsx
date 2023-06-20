import React from 'react';
import LinkIcon from '@components/ui-kit/Icons/LinkIcon';
import { ComponentStory } from '@storybook/react';
import Button from './';

export default {
  title: 'components/Ui-kit/Button',
  component: Button,
};

export const PrimaryButtonWithIcon: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

PrimaryButtonWithIcon.args = {
  variant: 'smallRadius',
  color: 'primary',
  endIcon: <LinkIcon />,
  children: 'Secret energy',
};

export const SecondaryButtonWithIcon: ComponentStory<typeof Button> = (
  args,
) => {
  return <Button {...args} />;
};

SecondaryButtonWithIcon.args = {
  variant: 'contained',
  color: 'secondary',
  endIcon: <LinkIcon />,
  children: 'Secret energy',
};

export const Primary: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

Primary.args = {
  children: 'Button primary',
};

export const PrimaryDisabled: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

PrimaryDisabled.args = {
  children: 'Button primary',
  disabled: true,
};

export const PrimaryOutlined: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

PrimaryOutlined.args = {
  children: 'Button primary',
  variant: 'outlined',
};

export const PrimaryOutlinedDisabled: ComponentStory<typeof Button> = (
  args,
) => {
  return <Button {...args} />;
};

PrimaryOutlinedDisabled.args = {
  children: 'Button primary',
  variant: 'outlined',
  disabled: true,
};

export const Secondary: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

Secondary.args = {
  children: 'Button secondary',
  variant: 'contained',
  color: 'secondary',
};

export const SecondaryDisabled: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

SecondaryDisabled.args = {
  children: 'Button secondary',
  variant: 'contained',
  color: 'secondary',
  disabled: true,
};

export const SecondaryOutlined: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

SecondaryOutlined.args = {
  children: 'Button secondary',
  variant: 'outlined',
  color: 'secondary',
};

export const SecondaryOutlinedDisabled: ComponentStory<typeof Button> = (
  args,
) => {
  return <Button {...args} />;
};

SecondaryOutlinedDisabled.args = {
  children: 'Button secondary',
  variant: 'outlined',
  color: 'secondary',
  disabled: true,
};

export const TextPrimary: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

TextPrimary.args = {
  children: 'Button text',
  variant: 'text',
  color: 'primary',
};
