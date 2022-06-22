import React from 'react'
import styled from '@emotion/styled'

type StyleProps = {
 RISE: '#c84a31' | string
 EVEN: '#333' | string
 FALL: '#1261c4' | string
 DEFAULT: '#333' | string
}

const PriceBlock = styled.div`
 letter-spacing: 2px;
 color: ${(props: { change: keyof StyleProps; customColor: Partial<StyleProps> }) => props.customColor[props.change]};
`

interface PriceProps {
 price: number | string
 options?: {
  symbol: 'ko-KR'
  currency: 'KRW'
 }
 change?: keyof StyleProps
 color?: Partial<StyleProps>
}

function Price(props: PriceProps) {
 const {
  price,
  options: { symbol = 'ko-KR', currency = 'KRW' } = {},
  change = 'DEFAULT',
  color = {
   RISE: '#c84a31',
   EVEN: '#333',
   FALL: '#1261c4',
   DEFAULT: '#333',
  },
 } = props

 return (
  <PriceBlock change={change} customColor={color}>
   {new Intl.NumberFormat(symbol, { style: 'currency', currency }).format(+price)}
  </PriceBlock>
 )
}

export default Price
