import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "./login-form.component";

const meta: Meta<typeof Input> = {
  title: "Examples/Form",
  component: LoginForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Login: Story = {};
