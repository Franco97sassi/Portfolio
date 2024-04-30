import React, { useContext } from 'react'
import Home from './home'
import Sobre from './sobre'
import Portfolio from './portfolio'
import Experiencia from './experiencia'
import Contacto from './contacto'
import { Box   } from '@mui/material';
import { DarkModeContext } from '../contexts/DarkModeContext'
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import curriculum from "../assets/curriculum.png";
 

const General = () => {
  const isDark = useContext(DarkModeContext)

  const handleDownload = () => {
    // Redireccionar a la URL del PDF en Google Drive
    window.location.href = "https://drive.google.com/uc?export=download&id=1Bn9sHwteMgA_-wl405nnoKdpP5W8-s5c";
  };
  return (
    <div className={isDark ? "dark" :"light" }>
   
    <Box sx={{ backgroundImage:'linear-gradient(#4A235A, #212F3C ,#4A235A )'}}> 
     

      <section id="home">     <Home /></section>  
        <section id="perfil">  <Sobre /></section>
     <section id="portfolio"><Portfolio /></section>
     <section id="tecnologías"><Experiencia /></section>   
     <section id="contacto"> <Contacto /></section>   
     <div style={{   position: 'fixed', top: '50%', right: '1%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
      <a href="https://github.com/Franco97sassi?tab=repositories"><img src={github} alt="" style={{ width: '50px' }} /></a>     
    
     <a href="https://www.linkedin.com/in/franco-sassi-777b0317a/"> <img src={linkedin} alt="" style={{ width: '50px' }} /></a>     
          <a href="https://drive.google.com/uc?export=download&id=1Bn9sHwteMgA_-wl405nnoKdpP5W8-s5c" download><img src={curriculum} alt="" style={{ width: '50px' }} /></a>
        </div>
     </Box>
 </div> 
   )
}

export default General