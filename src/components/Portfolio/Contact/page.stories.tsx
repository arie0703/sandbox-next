import { StoryObj, Meta } from '@storybook/react';
import { Contact } from './page';

const meta: Meta<typeof Contact> = {
  title: "Contact",
  component: Contact,
  args: {},
};

export default meta

type Story = StoryObj<typeof Contact>;

export const Default: Story = {
  argTypes: {}
}



