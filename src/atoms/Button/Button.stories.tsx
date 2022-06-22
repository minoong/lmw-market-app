import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Button from '.'

export default {
 title: 'Example/Button',
 component: Button,
 argTypes: {
  backgroundColor: { control: 'color' },
 },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
 primary: true,
 label: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
 label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
 size: 'large',
 label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
 size: 'small',
 label: 'Button',
}

export const Default = Template.bind({})
Default.args = {
 label: 'Button',
}

export const Full = Template.bind({})
Full.args = {
 full: true,
 label: 'Button',
}
