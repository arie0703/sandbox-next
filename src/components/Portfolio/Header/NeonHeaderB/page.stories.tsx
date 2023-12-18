import { StoryObj, Meta } from '@storybook/react';
import { NeonHeaderB } from './page';


const meta: Meta<typeof NeonHeaderB> = {
  title: "NeonHeaderB",
  component: NeonHeaderB,
  args: {},
};

export default meta

type Story = StoryObj<typeof NeonHeaderB>;

export const Default: Story = {
  argTypes: {}
}
