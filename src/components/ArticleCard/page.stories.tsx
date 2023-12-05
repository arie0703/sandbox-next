import { StoryObj, Meta } from '@storybook/react';
import { ArticleCard } from './page';


const meta: Meta<typeof ArticleCard> = {
  title: 'ArticleCard',
  component: ArticleCard,
  args: {
    title: 'title',
    url: 'http://localhost:3000',
    tags: [{name: 'tag', versions: []}]
  },
};

export default meta

type Story = StoryObj<typeof ArticleCard>;

export const Default: Story = {
  argTypes: {
    title: {
      control: 'text',
      type: 'string',
      defaultValue: 'hoge',
    },
  }
}
