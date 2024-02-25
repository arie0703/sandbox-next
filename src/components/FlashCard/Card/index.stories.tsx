import { StoryObj, Meta } from '@storybook/react';
import { Card } from '.';

const meta: Meta<typeof Card> = {
  title: "Card",
  component: Card,
  args: {
    frontText: "表テキスト",
    backText: "裏テキスト"
  },
};

export default meta

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  argTypes: {}
}
