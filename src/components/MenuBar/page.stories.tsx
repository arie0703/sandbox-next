import { StoryObj, Meta } from '@storybook/react';
import { MenuBar } from './page';


const meta: Meta<typeof MenuBar> = {
  title: 'MenuBar',
  component: MenuBar,
  args: {},
};

export default meta

type Story = StoryObj<typeof MenuBar>;

export const Default: Story = {
  argTypes: {}
}
