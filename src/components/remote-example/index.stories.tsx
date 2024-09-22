// Generated with create-component/index.js
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import RemoteExample from './';

const meta = {
  title: 'Example/remote-example',
  component: RemoteExample,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: { onClick: fn() }
} satisfies Meta<typeof RemoteExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'remote-example',
    origin: 'distance space',
  }
};
