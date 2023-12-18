import { StoryObj, Meta } from '@storybook/react';
import { NeonHeaderA } from './page';


const meta: Meta<typeof NeonHeaderA> = {
  title: 'NeonHeaderA',
  component: NeonHeaderA,
  args: {},
};

export default meta

type Story = StoryObj<typeof NeonHeaderA>;

export const Default: Story = {
  argTypes: {}
}
