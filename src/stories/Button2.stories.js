import React from 'react';

import { Button2 } from '../button2/Button2';

export default {
  title: 'Example/Button',
  component: Button2,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button2 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button2',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button2',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button2',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button2',
};
