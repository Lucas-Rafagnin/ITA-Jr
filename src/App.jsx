import React,{ useState } from 'react'
import './App.css'
import {Outlet} from 'react-router-dom'
import Navbar from './Components/Navbar'

function App() {
 

  return (
    <>
      <div className="app">
        <Navbar />
        <Outlet />
       </div>
    </>
  )
}

export default App
