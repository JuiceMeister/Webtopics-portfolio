import React from 'react';
import { DarkmodeButton } from '../components/DarkmodeButton';

export default {
  title: 'DarkmodeButton',
  component: DarkmodeButton,
  argTypes: {
      backgroundLight: { control: 'color' },
  },
};

const Template = (args) => <DarkmodeButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    backgroundLight: "rgba(255, 255, 255, 0)"
};