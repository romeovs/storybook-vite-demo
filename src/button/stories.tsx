import * as react from "react"
import { Story } from "@storybook/react"

import { Button, ButtonProps } from "."

export default {
  title: "Button",
  component: Button,
}

export const Default: Story<ButtonProps> = Button.bind({})
Default.args = {
  children: "Click Me!",
}

export const Primary: Story<ButtonProps> = Button.bind({})
Primary.args = {
  primary: true,
  children: "Click Me!",
}
