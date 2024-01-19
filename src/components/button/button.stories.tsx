import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button.component";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Click Me!",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Medium-sized Solid Variant
 */
export const Solid: Story = {
  args: {
    variant: "solid",
    size: "md",
    colorscheme: "primary",
  },
};

/**
 * Medium-sized Outline Variant
 */
export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

/**
 * Medium-sized Ghost Variant
 */
export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

/**
 * Small-sized Solid Variant
 */
export const Small: Story = {
  args: {
    variant: "solid",
    size: "sm",
    colorscheme: "primary",
  },
};

/**
 * Large-sized Solid Variant
 */
export const Large: Story = {
  args: {
    variant: "solid",
    size: "lg",
    colorscheme: "primary",
  },
};
