import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./text.component";

const meta: Meta<typeof Button> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae at dolorum autem illum quos vitae, sunt similique! Nesciunt repellat ratione tempora laudantium rerum iusto est quas, ea expedita dolorem aperiam.",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    as: "h1",
  },
};
