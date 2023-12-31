import { StoryObj, Meta } from '@storybook/react';
import { Experience } from './page';

const meta: Meta<typeof Experience> = {
  title: "Experience",
  component: Experience,
  args: {},
};

export default meta

type Story = StoryObj<typeof Experience>;

export const Default: Story = {
  argTypes: {}
}



