import {   Box, Button, Grid, Typography, useMediaQuery } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // Importa Link de react-router-dom
import  fms from "../assets/imagenPortfolioNobg.png"

//  import  fms from "../assets/imagenPortoflio.jpg"
const Home = () => {
  const handlePortfolioClick = () => {
    // Simplemente puedes usar el ID de la sección a la que deseas redirigir
    const portfolioSection = document.getElementById('portfolio');
    // Hace scroll hasta la sección del portafolio
    portfolioSection.scrollIntoView({ behavior: 'smooth' });
  };
  const buttonStyles = {
    background: "linear-gradient(#17202A,#1B4F72  )",
    borderRadius: "999px",
    // padding: "16px 32px",
    display: "flex",
    flexDirection: "row",
    // gap: "12px",
    alignItems: "center",
    justifyContent: "center",
     position: "relative",
    boxShadow: "0px 5px 15px 0px rgba(37, 44, 97, 0.15), 0px 2px 4px 0px rgba(136, 144, 194, 0.2)",
    overflow: "hidden",
     fontSize: "16px",
    '&:hover': {
      background: "linear-gradient(#512E5F,#1A5276  )",
      boxShadow:"0px 5px 15px 0px rgba(37, 44, 97, 0.15), 0px 2px 4px 0px rgba(136, 144, 194, 0.20)"
    },
  };
  
const isMobile=useMediaQuery('(max-width:600px)')

  return (
      
   
      
    <Box sx={{  height: isMobile?"150vh":'100vh', display: 'flex',flexDirection:isMobile?"column":"row", alignItems: 'center',justifyContent:isMobile?"center":"flex-start" }}>

       <Grid container  spacing={2}       >
        <Grid item xs={12} md={6}sx={{ border: '0px solid white', display: 'flex',flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
 <Box sx={{paddingLeft:isMobile?"0%":"10%",width:"75%",paddingBottom:"5%"}}> 
          <Typography  variant="h1" textAlign={isMobile?"center":"left"} paddingBottom={1} > Desarrollador React Full Stack.</Typography> 
          <Typography variant="h5"textAlign={isMobile?"center":"left"}>  Estudié la carrera de Programación Front End y Programación Full Stack en Academia CoderHouse,
           donde adquirí una sólida base en desarrollo web. Desde entonces, me he especializado en la creación de interfaces de usuario dinámicas y atractivas
            utilizando tecnologías líderes como React y Material UI. He aplicado mis habilidades en una variedad de proyectos, demostrando mi capacidad para traducir
             diseños creativos en experiencias digitales funcionales y atractivas.</Typography> 
             </Box> 
            <Button sx={buttonStyles} variant="contained" component={RouterLink} to="/#portfolio" onClick={handlePortfolioClick}>Portfolio</Button>
        </Grid> 
        <Grid item  xs={12} md={6} sx={{border: '0px solid white', display: 'flex',  justifyContent:"center", alignItems: 'center' }}    >
             <Box sx={{ display: 'flex',  justifyContent:"center", alignItems: 'center' }}>  
               <img src={fms}   alt="fms"  style={{width:"75%",border: "none",borderRadius:"5%",background:"linear-gradient(#512E5F  ,#4A235A  , #212F3C    )"  }}   /> 
               </Box>
        </Grid>
      
      </Grid>
      </Box>
       
   )
}

export default Home
 