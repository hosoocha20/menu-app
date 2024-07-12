import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
        <Navbar position='sticky'/>
        <Navbar position='static'/>
        <Outlet />
    </>

  )
}

export default LandingPage