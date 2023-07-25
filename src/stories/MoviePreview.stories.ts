import type { Meta, StoryObj } from "@storybook/react";

import MoviePreview from "../components/molecules/MoviePreview/MoviePreview";

const meta = {
  component: MoviePreview,
} satisfies Meta<typeof MoviePreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    cast: "Jack Black, Jackie Chan",
    director: "Mark Osborne",
    genre: "Action, Comedy",
    title: "Kung Fu Panda",
    url: "https://upload.wikimedia.org/wikipedia/en/7/76/Kungfupanda.jpg",
    year: "2008",
  },
};

export const Empty: Story = {
  args: {
    cast: "",
    director: "",
    genre: "",
    title: "",
    url: "",
    year: "",
  },
};
