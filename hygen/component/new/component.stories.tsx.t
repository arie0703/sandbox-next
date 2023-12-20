---
to: src/components/<%= h.changeCase.pascalCase(name) %>/page.stories.tsx
unless_exists: true
---
import { StoryObj, Meta } from '@storybook/react';
import { <%= h.changeCase.pascalCase(name) %> } from './page';

const meta: Meta<typeof <%= h.changeCase.pascalCase(name) %>> = {
  title: "<%= h.changeCase.pascalCase(name) %>",
  component: <%= h.changeCase.pascalCase(name) %>,
  args: {},
};

export default meta

type Story = StoryObj<typeof <%= h.changeCase.pascalCase(name) %>>;

export const Default: Story = {
  argTypes: {}
}



