// Generated with create-component/index.js
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import RemoteRuntimeExample from './';

const meta = {
  title: 'Example/remote-runtime-example',
  component: RemoteRuntimeExample,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: { onClick: fn() }
} satisfies Meta<typeof RemoteRuntimeExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'remote-runtime-example',
    origin: '',
    onClick: (evnet) => {
      console.log(evnet);
    }
  }
};
