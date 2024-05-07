import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
 
const Sobre = () => {
  const isMobile=useMediaQuery('(max-width:600px)')

  return (
    <div>
    <Box sx={{ paddingRight:isMobile?"10%":"0%", textAlign:"center",paddingLeft:isMobile?"10%":"10%",width:isMobile?"100%":"75%", height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center" ,marginBottom:isMobile?"72%":"0%" }}> 

       
      <Typography  textAlign={isMobile?"center":"left"}  variant="h2"   fontWeight="bold" sx={{paddingBottom:"2%" }} >Sobre Mí</Typography>
      <Typography   variant="body" textAlign={isMobile?"center":"justify"}  sx={{paddingBottom:"1%"}} >   
          Soy Rosario, Santa Fe Argentina.   
             Completé con éxito la carrera de Desarrollador Front End en CoderHouse en 2023. </Typography>
              
          <Typography  variant="body" textAlign={isMobile?"center":"justify"}>  Me considero un profesional dedicado y predispuesto a realizar las distintas tareas que tenga que llevar a cabo. </Typography> 
          <Typography  variant="body" textAlign={isMobile?"center":"justify"} sx={{paddingBottom:"1%"}}>  Poseo experiencia trabajando en equipos multidisciplinarios y colaborando en diversos proyectos. Mi enfoque se centra en ofrecer soluciones innovadoras y de alta calidad para satisfacer las necesidades de los clientes. </Typography> 
          <Typography  variant="body" textAlign={isMobile?"center":"justify"}  >  
          Mi objetivo es continuar avanzando en el mundo de la tecnología de la información, explorando nuevos proyectos y expandiendo mis conocimientos en las últimas tecnologías. Estoy comprometido a mantenerme al día con las tendencias y los avances en el campo de la informática, y estoy emocionado por la oportunidad de aplicar mis habilidades para resolver desafíos tecnológicos y contribuir al éxito de proyectos innovadores.
          </Typography> 

         </Box>
    </div>
  )
}

export default Sobre
 