import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { Typography } from '@mui/material'

import ResponsiveAppBar from './molecules/Gnb'
import Market from './pages/Market'
import Wallet from './pages/Wallet'

import './App.css'

function Layout() {
 return (
  <Typography component="main" sx={{ height: '100vh' }}>
   <ResponsiveAppBar />
   <Outlet />
  </Typography>
 )
}

function App() {
 return (
  <div className="App">
   <Routes>
    <Route path="/" element={<Layout />}>
     <Route path="market" element={<Market />} />
     <Route path="wallet" element={<Wallet />} />
    </Route>
   </Routes>
  </div>
 )
}

export default App
