import { upper } from "../util.js";

export default (componentName) => {
  const name = upper(componentName);

  return ({
    content: `// Generated with create-component/index.js
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import ${name} from './';

const meta = {
  title: 'Example/${componentName}',
  component: ${name},
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: { onClick: fn() }
} satisfies Meta<typeof ${name}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: '${componentName}'
  }
};
`,
    extension: `.stories.tsx`
  })
};
