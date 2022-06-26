import React from 'react'
import { text } from '@storybook/addon-knobs'
import { ComponentMeta } from '@storybook/react'

import Img from '.'

export default {
 title: 'atoms/Img',
 component: Img,
} as ComponentMeta<typeof Img>

export const Index = () => (
 <div style={{ padding: '1rem', backgroundColor: 'gray' }}>
  <div style={{ width: '100%' }}>
   <Img
    alt={text('alt', 'main banner img')}
    src="https://via.placeholder.com/250"
    lazy={{ placeholder: 'https://via.placeholder.com/150' }}
   />
  </div>
  <div style={{ width: '100%' }}>
   <Img
    alt={text('alt', 'main banner img')}
    src="https://via.placeholder.com/350"
    lazy={{ placeholder: 'https://via.placeholder.com/150' }}
   />
  </div>
 </div>
)
