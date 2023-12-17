import { StoryObj, Meta } from '@storybook/react';
import { Header } from './page';


const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
  args: {},
};

export default meta

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  argTypes: {}
}
