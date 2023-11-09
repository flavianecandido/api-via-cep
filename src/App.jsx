import { useState } from 'react'

import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import { NormalizeStyles } from './shared/NormalizeStyles';


function App() {
  

  return (
    <>
      <NormalizeStyles />
      <NavBar />
      <Outlet />
    </>
  )
}

export default App
