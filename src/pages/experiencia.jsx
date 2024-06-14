import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
 
// import ReactIconSvg from "../assets/React";
// import ExpressIconSvg from "../assets/ExpressIconSvg";
// import MongoIconSvg from "../assets/MongoIconSvg";
// import NodeIconSvg from "../assets/NodeIconSvg";
// import GithubIconSvg from "../assets/GithubIconSvg";
// import DockerIconSvg from "../assets/DockerIconSvg";
import { useState } from "react";
import { useTranslation } from "react-i18next"; // Asegúrate de importar esto

// import PythonIconSvg from "../assets/PythonIconSvg";
import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import js from "../assets/js.png";

// import css from "../assets/Css";
//  import js from "../assets/Js";
// // import Node from "../assets/Node";
// // import ReactIcon from "../assets/React";
// import sass from "../assets/Sass";
 import firebase from "../assets/firebase.png";
  import bootstrap from "../assets/bootstrap.png";
 import MYSQL from "../assets/MYSQL.png";
 import react from "../assets/rct.png";
 import node from "../assets/node.png";
 import express from "../assets/express.png";
 import mongo from "../assets/mongo.png";
 import docker from "../assets/docker.png";

 import tailwind from "../assets/tailwindIcon.png";
 import sass from "../assets/sass.png";
 import python from "../assets/pythonIcon.png";
 import handlebars from "../assets/handlebars.png";

const Experiencia = ({isDarkMode}) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { t } = useTranslation(); // Esto te da acceso a las traducciones
  const itemData = [
    { img: html, title: "Html" },
    { img: css, title: "Css" }, 
    { img: js, title: "js" },
    { img: sass, title: "sass" },
    { img: python, title: "python" },

    { img: mongo, title: "mongo" },   
    { img: express, title: "express" },   

    { img: react, title: "react" },   
    { img: node, title: "node" },   

     { img: github, title: "github" },
     { img: docker, title: "docker" },
 
    //   // { img: <GithubIconSvg/>, title: "Github" },
    //  { img: js, title: "Js" },
    // // { img: <MongoIconSvg/>, title: "MongoDB" },
    // // { img: <ExpressIconSvg/>, title: "Express" },

    // //  { img: <ReactIconSvg/>, title: "React" },
    // //   { img: <NodeIconSvg/>, title: "Node Js" },
      { img: bootstrap, title: "Bootstrap" },

    // { img: sass, title: "SASS" },
    { img: firebase, title: "Firebase" },
     { img: tailwind, title: "Tailwind" },
    // // { img: <PythonIconSvg/>, title: "Python" },
      { img: MYSQL, title: "MYSQL" },
      { img: handlebars, title: "handlebars" },

    //  { img: <DockerIconSvg/>, title: "docker" },
  ];
  // const itemData = [
  //   // { img: html, title: "Html" },
  //   // { img: css, title: "Css" },
  //     { img: <GithubIconSvg/>, title: "Github" },
  //   // { img: js, title: "Js" },
  //   { img: <MongoIconSvg/>, title: "MongoDB" },
  //   { img: <ExpressIconSvg/>, title: "Express" },

  //    { img: <ReactIconSvg/>, title: "React" },
  //     { img: <NodeIconSvg/>, title: "Node Js" },
  //    // { img: bootstrap, title: "Bootstrap" },

  //   // { img: sass, title: "SASS" },
  //   // { img: firebase, title: "Firebase" },
  //   // { img: tailwind, title: "Tailwind" },
  //   // { img: <PythonIconSvg/>, title: "Python" },
  //    // { img: MYSQL, title: "MYSQL" },
  //    { img: <DockerIconSvg/>, title: "docker" },
  // ];
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      <Box
        sx={{
          paddingTop: "100px",
          paddingBottom: "150px",
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
            fontWeight="bold"
            fontStyle="italic"
            sx={{
              textAlign: isMobile ? "center" : "center",
              paddingBottom: "1%",
            }}
          >
                        {t('experiencia.title')}

          </Typography>
          <Divider 
        sx={{
          width: "300px",           // Ancho del 50% del contenedor
          margin: "0 auto",       // Centrar horizontalmente
          borderColor: isDarkMode ? "#ffffff" : "#000000", // Cambia el color dependiendo del modo
          borderWidth: "1px",     // Grosor del Divider
          marginBottom: isMobile?"4%":"2%",     // Espacio debajo del Divider
        }} 
      />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: isMobile ? "150px" : "100px",
            padding: "25px",
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
