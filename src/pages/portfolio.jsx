 
import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, useMediaQuery, Card, CardMedia, Button, CardContent, CardActions, Link  } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
 
import rifas from "../assets/rifas.png";
import mdGlobal from "../assets/mdGlobal.png";
import tiendaTecnologia from "../assets/tiendaTecnologia.png";
import landing from "../assets/landing.png";
import comidas from "../assets/comidasjs.png";
import rosario from "../assets/rosario.png";
import backend from "../assets/backend.png";
import todoFloral from "../assets/todoFloral.png";
   const Portfolio = () => {
    const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

 
  const projectImages = [
        {
          img: rifas,
          title: 'Rifas El venado',
          url: "https://www.rifaselvenado.com/",
          github: "https://github.com/Franco97sassi/Rifas.git",
          description: "Rifas El Venado es un proyecto dedicado a la venta de productos y la organización de rifas en línea."
        },
        {
          img: landing,
          title: 'Landing',
          url: "https://www.rifaselvenado.com/",
          github: "https://github.com/Franco97sassi/Landing",
          description: "Landing de la empresa TechX."
        },
        {
          img: mdGlobal,
          title: 'MdGlobal',
          url: "https://md-global2024.vercel.app/",
          // github: "https://github.com/Franco97sassi/Rifas.git",
          description: " El proyecto de importación y exportación es una plataforma dedicada a simplificar y agilizar los procesos de comercio internacional."
        },
        {
          img: todoFloral,
          title: 'Todo Floral',
          url: "https://ecommerce-floral.vercel.app/",
          github: "https://github.com/Franco97sassi/TF",
          description: "Ecommerce de tienda de flores."
        },
    
        {
          img: tiendaTecnologia,
          title: 'Venta de Aparatos Teconológicos',
          url: "https://entrega-final-sassi-react-js.vercel.app/",
          github: "https://github.com/Franco97sassi/EntregaFinal-Sassi-ReactJs",
          description:"Mi proyecto hecho con React"
        },
        {
          img: backend,
          title: 'E-Commerce Backend',
          // url: "https://entrega-final-sassi-react-js.vercel.app/",
          github: "https://github.com/Franco97sassi/Backend-Desafios",
     
         },
         
        {
          img: rosario,
          title: 'Ciudad de Rosario',
          url: "https://proyecto1francosassi.vercel.app/",
          github: "https://github.com/Franco97sassi/PF-FrancoSassi",
          description:"Mi primer proyecto realizado en Visual Studio donde aplico patrones de diseño basico como Html y Css."
         },
         {
          img: comidas,
          title: 'Tienda de comidas',
          url: "https://franco97sassi.github.io/ProyectoFinalJS-Sassi/",
          github: "https://github.com/Franco97sassi/ProyectoFinalJS-Sassi",
          description:"Mi primer proyecto con JavaScript"
         },
        
         
        
      
      ]
  const chunkSize = isNonMobileScreens ? 3 : 1;
  const [currentChunk, setCurrentChunk] = useState(0);
  const [inView, setInView] = useState(false);

  const isMobile=useMediaQuery('(max-width:600px)')
  const chunkedImages = projectImages.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return (
    <div >
      <Box sx={{ paddingTop: "20%",paddingRight:isMobile?"10%":"0%", textAlign:"center",paddingLeft:isMobile?"10%":"10%" }}> 

       
<Typography  textAlign={isMobile?"center":"left"}  variant="h2"   fontWeight="bold" sx={{paddingBottom:"2%" }} >Portfolio</Typography>
</Box>
      <Box  sx={{height:"100vh",justifyContent:"center",alignItems:"center"}}>
 

        <Carousel
          autoPlay={true}
          interval={3000}
          animation="slide"
          indicators={false}
          navButtonsAlwaysVisible={!isMobile} // Ocultar flechas en dispositivos móviles
          navButtonsProps={{
            style: {
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '50%',
              color: 'white',
              // Ajusta estos márgenes para cambiar la distancia de las flechas a las imágenes
              marginRight: '30px',
              marginLeft: '30px',
            },
          }}
          NextIcon={<KeyboardArrowRightIcon />}
          PrevIcon={<KeyboardArrowLeftIcon />}
          index={currentChunk}
          onChange={(index, active) => setCurrentChunk(index)}
        >
          {chunkedImages.map((chunk, index) => (
            <Grid
              container
              key={index}
              justifyContent="center"
              alignItems="center"
              spacing={isNonMobileScreens ? 10 : 2} // Ajusta el valor de spacing según sea necesario
              sx={{ padding: '0px' }}
              
            >
              
              {chunk.map((item, subIndex) => (
                <Grid item key={subIndex}>
                 
                  {/* <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 300,
                      height: 300,
                      borderRadius: '50%',
                      transition: 'transform 0.3s',
                      '&:hover': {
                        opacity: [0.9, 0.8, 0.7],
                        transform: 'scale(1.1)',
                      },
                    }}
                  > */}
                    {/* <img
                      src={item.imageUrl}
                      alt={`Miembro ${index * chunkSize + subIndex + 1}`}
                      style={{ width: isNonMobileScreens?'152.8px':"125px", height:isNonMobileScreens?'156.99px':"125px", borderRadius: '50%' }}
                    /> */}
                     {/* <img src={item.imageUrl}   style={{
                  // maxWidth: '50%',
                  // maxHeight: '50%',  
                  width: isNonMobileScreens?'75%':"50%",
                  height: isNonMobileScreens?'75%':"50%",  
                  objectFit: 'contain',
                  borderRadius: "25px",
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'      ,
                 
                }} />  */}
                  {/* <Box sx={{   borderRadius: "5%", border:isNonMobileScreens?"none": '1px solid grey', display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                   <img src={item.imageUrl} style={{   width: isNonMobileScreens?"250px":"100%", borderRadius: "5%" }}   />
                  </a>
                 <Box sx={{ display: isNonMobileScreens?"none":'flex', gap:isNonMobileScreens?"15px": "50px", paddingTop: "5%" }}>
                    <Typography variant="h5" onClick={() => handleDescriptionClick(item)}>Descripción</Typography>

                    <a href={item.imageUrl}>     <Typography variant="h5"  >Código</Typography></a>
              </Box>
                   </Box> */}
                    <Typography sx={{textAlign:"center",color:"white"}} gutterBottom variant="h5" component="div">
                    {item.title}
        </Typography>
                  <Card sx={{ maxWidth: isNonMobileScreens ? 345 : "100%", borderRadius: "5%" }}>
                    
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={item.img}
       />
       
       <CardActions 
       sx={{ display: "flex", justifyContent: "center", background:  "linear-gradient(#512E5F  ,#212F3C  , #512E5F    )" }}>
                      <Link href={item.url} target="_blank" rel="noopener noreferrer">
                        <Button size="small"  sx={{color:"white"}}>Proyecto</Button>
                      </Link>
                      
                        <Link href={item.github} >
                          <Button size="small"sx={{color:"white"}}>Código</Button>
                        </Link>
                      
                    </CardActions>
    </Card>
                   {/* </Box> */}
                  
                </Grid>
              ))}
            </Grid>
          ))}
        </Carousel>
      </Box>
    </div>
  );
}

export default Portfolio;
