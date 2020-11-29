import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import D3Axis from "../components/d3-axis";

export default {
  title: "Annotation/D3Axis",
  component: D3Axis,
  argTypes: {
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
  },
} as Meta;

const Template: Story<null> = () => (
  <D3Axis />
);

export const Default = Template.bind({})
