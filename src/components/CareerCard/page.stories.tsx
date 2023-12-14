import { StoryObj, Meta } from '@storybook/react';
import { CareerCard } from './page';


const meta: Meta<typeof CareerCard> = {
  title: 'CareerCard',
  component: CareerCard,
  args: {
    title: '自動化の導入',
    description: '〇〇チームでの▲▲作業の自動化を導入した。\n その結果、作業時間を△△%削減できた。',
    period: '2020/01 ~ 2020/03'
  },
};

export default meta

type Story = StoryObj<typeof CareerCard>;

export const Default: Story = {
  argTypes: {
    title: {
      control: 'text',
      type: 'string',
      defaultValue: 'hoge',
    },
  }
}
