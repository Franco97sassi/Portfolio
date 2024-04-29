import React, { useContext } from 'react'
import Home from './home'
import Sobre from './sobre'
import Portfolio from './portfolio'
import Experiencia from './experiencia'
import Contacto from './contacto'
import { Box   } from '@mui/material';
import { DarkModeContext } from '../contexts/DarkModeContext'

const General = () => {
  const isDark = useContext(DarkModeContext)

  return (
    <div className={isDark ? "dark" :"light" }>
   
    <Box sx={{ backgroundImage:'linear-gradient(#4A235A, #212F3C ,#4A235A )'}}> 
      <section id="home">     <Home /></section>  
        <section id="perfil">  <Sobre /></section>
     <section id="portfolio"><Portfolio /></section>
     <section id="experiencia"><Experiencia /></section>   
     <section id="contacto"> <Contacto /></section>   
     </Box>
 </div> 
   )
}

export default General