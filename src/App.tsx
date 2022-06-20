/* eslint-disable camelcase */
import React, { useState } from 'react'
import { useObservableState } from 'observable-hooks'
import logo from './logo.svg'
import './App.css'
import Button from './atoms/Button'
import { upbitWithLmw$ } from './features/upbit'
import Price from './atoms/Price'

function App() {
 const deck = useObservableState(upbitWithLmw$, [])

 return (
  <div className="App">
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

export default App
