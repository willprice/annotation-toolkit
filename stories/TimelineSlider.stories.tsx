import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import TimelineSlider, {
  TimelineSliderArgs,
} from "../components/timeline-slider";

export default {
  title: "Annotation/TimelineSlider",
  component: TimelineSlider,
  argTypes: {
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
  },
} as Meta;

const Template: Story<TimelineSliderArgs> = (args) => (
  <TimelineSlider {...args} />
);

export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 1,
  step: 0.01,
};
