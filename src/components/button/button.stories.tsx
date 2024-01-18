import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button.component";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click Me!",
    variant: "solid",
    size: "md",
    colorscheme: "primary",
  },
};
