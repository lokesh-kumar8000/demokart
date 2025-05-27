import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './comman/Header'
import Footer from './comman/Footer'
function Layout() {
  return ( 
    <>
    <Header/>
    <Outlet/>
    <Footer/> 
    </>
  )
}

export default Layout