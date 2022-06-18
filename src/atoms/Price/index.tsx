import React from 'react'

interface PriceProps {
 price: number | string
}

function Price(props: PriceProps) {
 const { price } = props
 //  return <div>{new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(+price)}</div>
 return <div>{price}</div>
}

export default Price
