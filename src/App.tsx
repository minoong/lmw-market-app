import React, { useState } from 'react'
import { useObservableState } from 'observable-hooks'
import logo from './logo.svg'
import './App.css'
import Button from './atoms/Button'
import { upbitWithLmw$ } from './features/upbit'

function App() {
 const deck = useObservableState(upbitWithLmw$, [])

 return (
  <div className="App">
   {deck.map((coin) => (
    <div key={coin.english_name}>{coin.korean_name}</div>
   ))}
  </div>
 )
}

export default App
