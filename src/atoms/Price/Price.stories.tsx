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
 options: {
  symbol: 'ko-KR',
  currency: 'KRW',
 },
 change: 'EVEN',
 color: {
  RISE: '#c84a31',
  EVEN: '#333',
  FALL: '#1261c4',
  DEFAULT: '#333',
 },
}
