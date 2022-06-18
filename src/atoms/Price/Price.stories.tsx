import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Price from '.'

export default {
 title: 'Example/Price',
 component: Price,
} as ComponentMeta<typeof Price>

const Template: ComponentStory<typeof Price> = (args) => <Price {...args} />

export const Primary = Template.bind({})
Primary.args = {
 price: 10000000,
}
