import type { Meta, StoryObj } from "@storybook/react";

import HeaderCatalogue from "../components/atoms/HeaderCatalogue/HeaderCatalogue";

const meta = {
  component: HeaderCatalogue,
} satisfies Meta<typeof HeaderCatalogue>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    title: "Kung Fu Panda",
  },
};

export const Empty: Story = {
  args: {
    title: "",
  },
};
