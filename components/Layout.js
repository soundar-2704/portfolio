import React from 'react'
import Box from '@mui/material/Box'
import NavBar from './NavBar'
import Footer from './Footer'
import Resnavbar from "./Resnavbar";

export default function Layout({children}) {
  return (
    <>
    <Box sx={{backgroundColor:'#0d0d0d',height:'100%'}}>
  <NavBar/>
  <Resnavbar/>
  {children}
  <Footer/>
  </Box>
    </>
  )
}
