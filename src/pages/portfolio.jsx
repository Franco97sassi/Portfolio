import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  useMediaQuery,
  Card,
  CardMedia,
  Button,
  CardContent,
  CardActions,
  Link,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import rifas from "../assets/rifas.png";
import mdGlobal from "../assets/mdGlobal.png";
import tiendaTecnologia from "../assets/tiendaTecnologia.png";
import landing from "../assets/landing.png";
import comidas from "../assets/comidasjs.png";
import rosario from "../assets/rosario.png";
import backend from "../assets/backend.png";
import todoFloral from "../assets/todoFloral.png";
const Portfolio = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const projectImages = [
    {
      img: rifas,
      title: "Rifas El venado",
      url: "https://www.rifaselvenado.com/",
      github: "https://github.com/Franco97sassi/Rifas.git",
      description:
        "Rifas El Venado es un proyecto full-stack dedicado a la venta de indumentaria y la organización de rifas en línea.",
    },
    {
      img: landing,
      title: "Landing",
      url: "https://www.rifaselvenado.com/",
      github: "https://github.com/Franco97sassi/Landing",
      description: "Landing de la empresa TechX.",
    },
    {
      img: mdGlobal,
      title: "MdGlobal",
      url: "https://md-global2024.vercel.app/",
      // github: "https://github.com/Franco97sassi/Rifas.git",
      description:
        " El proyecto de importación y exportación de MDGlobal es una plataforma dedicada a simplificar y agilizar los procesos de comercio internacional.",
    },
    {
      img: todoFloral,
      title: "Todo Floral",
      url: "https://ecommerce-floral.vercel.app/",
      github: "https://github.com/Franco97sassi/TF",
      description: "Ecommerce de un tienda de venta de flores y organización de eventos.",
    },

    {
      img: tiendaTecnologia,
      title: "Venta de Aparatos Teconológicos",
      url: "https://entrega-final-sassi-react-js.vercel.app/",
      github: "https://github.com/Franco97sassi/EntregaFinal-Sassi-ReactJs",
      description: "Mi primer proyecto hecho con React de una tienda de venta de productos electrónicos."
    },
    {
      img: backend,
      title: "E-Commerce Backend",
      // url: "https://entrega-final-sassi-react-js.vercel.app/",
      github: "https://github.com/Franco97sassi/Backend-Desafios",
      description:"Proyecto E-Commerce Full Stack, donde utilizo como base de datos a MongoDB."
    },

    {
      img: rosario,
      title: "Ciudad de Rosario",
      url: "https://proyecto1francosassi.vercel.app/",
      github: "https://github.com/Franco97sassi/PF-FrancoSassi",
      description:
        "Mi primer proyecto realizado en Visual Studio donde aplico patrones de diseño basico como Html, Css y varias librerías.",
    },
    {
      img: comidas,
      title: "Tienda de comidas",
      url: "https://franco97sassi.github.io/ProyectoFinalJS-Sassi/",
      github: "https://github.com/Franco97sassi/ProyectoFinalJS-Sassi",
      description: "Mi primer proyecto con JavaScript que consiste en un negocio de venta de comidas.",
    },
  ];
  const chunkSize = isNonMobileScreens ? 3 : 1;
  const [currentChunk, setCurrentChunk] = useState(0);
  const [inView, setInView] = useState(false);

  const isMobile = useMediaQuery("(max-width:600px)");
  const chunkedImages = projectImages.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return (
    <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center"}}>
      <Box
        sx={{
          paddingTop: "20%",
          paddingRight: isMobile ? "10%" : "0%",
          textAlign: "center",
          paddingLeft: isMobile ? "10%" : "0%",
        }}
      >
        <Typography
          textAlign={isMobile ? "center" : "center"}
          variant="h2"
          fontWeight="bold"
          sx={{ paddingBottom: "2%" }}
        >
          Mis Proyectos
        </Typography>
      </Box>
      <Box
        sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }}
      >
        <Carousel
          autoPlay={true}
          interval={3000}
          animation="slide"
          indicators={false}
          navButtonsAlwaysVisible={false} // Ocultar flechas en dispositivos móviles
          
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
              sx={{ padding: "0px" }}
            >
              {chunk.map((item, subIndex) => (
                <Grid item key={subIndex}>
                  
                  <Card
                    sx={{
                      maxWidth: isNonMobileScreens ? 345 : 250,
                      borderRadius: "5%",
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height= {isNonMobileScreens ?"175":"150"}
                       
                      width="290"
                      image={item.img}
                      style={{  
                        backgroundColor:"#263238" ,objectFit:isNonMobileScreens ?  'cover':"cover", objectPosition: 'center' }}

                    />
<CardContent sx={{ display:"flex",flexDirection:"column",paddingBottom:"75px",
            alignItems: "center",textAlign:"center",height:"75px",backgroundImage:
                          "linear-gradient(#263238  ,#212F3C  , #263238    )",}}>
        <Typography variant="h5" sx={{paddingBottom:"5px",fontWeight:"bold"}}  >
           {item.title}
        </Typography>
        <Typography variant="body2" sx={{display:isNonMobileScreens? "flex":"none"}}  >
           {item.description}
        </Typography>
      </CardContent>
                    <CardActions
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        background:
                          "linear-gradient(#263238  ,#212F3C  , #263238    )",
                      }}
                    >
                      <Link
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="small" sx={{ color: "white",fontWeight:"bold" }}>
                          Proyecto
                        </Button>
                      </Link>

                      <Link href={item.github}>
                        <Button   size="small" sx={{ color: "white",fontWeight:"bold" }}>
                          Código
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Portfolio;
