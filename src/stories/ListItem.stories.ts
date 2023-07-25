import type { Meta, StoryObj } from "@storybook/react";

import ListItem from "../components/atoms/ListItem";

const meta = {
  component: ListItem,
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    id: "1",
    isSelected: true,
    title: "Kung Fu Panda",
  },
};
