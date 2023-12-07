import { StoryObj, Meta } from '@storybook/react';
import { WorkCard } from './page';


const meta: Meta<typeof WorkCard> = {
  title: 'WorkCard',
  component: WorkCard,
  args: {
    title: 'AAAAAAAAAA',
    imagePath: '/images/portan-app-thumbnail.png',
  },
};

export default meta

type Story = StoryObj<typeof WorkCard>;

export const Default: Story = {
  argTypes: {
    title: {
      control: 'text',
      type: 'string',
      defaultValue: 'hoge',
    },
  }
}
