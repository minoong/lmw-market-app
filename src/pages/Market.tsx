/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useObservableState } from 'observable-hooks'

import Price from '../atoms/Price'
import { upbitWithLmw$ } from '../features/upbit'

function Market() {
 const deck = useObservableState(upbitWithLmw$, [])

 return (
  <div>
   {deck.map(
    ({
     english_name,
     korean_name,
     trade_price,
     signed_change_rate,
     signed_change_price,
     acc_trade_price_24h,
     change,
    }) => (
     <div key={english_name}>
      {korean_name}
      <Price price={trade_price} options={{ currency: 'KRW', symbol: 'ko-KR' }} change={change} />
      <div>
       <div>{(signed_change_rate * 100).toFixed(2)}%</div>
       <div>{signed_change_price.toLocaleString()}</div>
      </div>
      <div>{acc_trade_price_24h}</div>
     </div>
    ),
   )}
  </div>
 )
}

export default Market
