import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import js from "../assets/js.png";
import node from "../assets/node.png";
import rct from "../assets/rct.png";
import sass from "../assets/sass.png";
import mongo from "../assets/mongo.png";
import firebase from "../assets/firebase.png";
import tailwind from "../assets/tailwindIcon.png";
import python from "../assets/pythonIcon.png";
import MYSQL from "../assets/MYSQL.png";
import docker from "../assets/docker.png";

import { useState } from "react";
import bootstrap from "../assets/bootstrap.png";
const Experiencia = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const itemData = [
    { img: html, title: "Html" },
    { img: css, title: "Css" },
    { img: github, title: "Github" },
    { img: js, title: "Js" },
    { img: rct, title: "React" },
    { img: bootstrap, title: "Bootstrap" },
    { img: node, title: "Node Js" },
    { img: sass, title: "SASS" },
    { img: firebase, title: "Firebase" },
    { img: tailwind, title: "Tailwind" },
    { img: python, title: "Python" },
    { img: mongo, title: "MongoDB" },
    { img: MYSQL, title: "MYSQL" },    
    { img: docker, title: "docker" },

  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      <Box
        sx={{
          paddingTop:"100px",paddingBottom:"150px",
          height: isMobile ? "max-content" : "max-content",
          alignContent: "center",
          marginBottom: isMobile ? "0" : "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: isMobile ? "0%" : "0%",
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold" fontStyle="italic"
            sx={{ textAlign: isMobile ? "center" : "center" ,paddingBottom:"20px"}}
          >
            Technologies
          </Typography>

           
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
             justifyContent: "center",
            alignItems: "center",
            flexWrap:"wrap",
            gap:  isMobile ?"150px":"100px"
          }}
        >
          
          {itemData.map((item, index) => (
             
            <>
              <Box
  sx={{
    p: 1,
    display: "flex",
    alignItems: "center",
    transition: "transform 0.3s, box-shadow 0.3s", // Añade transición para la transformación y la sombra
    transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
    boxShadow: hoveredIndex === index ? '0 4px 8px rgba(148, 0, 211, 0.5)' : '0 4px 8px rgba(0, 191, 255, 0.5)', // Añade sombra celeste al hacer hover
    '&:hover': {
      transform: "scale(1.1)", // Escala el tamaño del Box
      boxShadow: '0 4px 8px rgba(148, 0, 211, 0.5)', // Cambia la sombra a violeta al pasar el ratón
    },
    borderRadius: "5%",
    height: "100px"
  }}
>
  <img
    src={item.img}
    style={{
      width: isMobile ? "50px" : "75px",
      maxWidth: "150px",
      transition: "transform 0.3s", // Añade transición para la imagen
      transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)", // Escala la imagen al pasar el ratón
    }}
    alt={item.title}
  />
</Box>
            </>
            // </Grid>
          ))}
          {/* </Grid> */}
        </Box>
      </Box>{" "}
    </div>
  );
};

export default Experiencia;
