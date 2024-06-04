import { Box, Button, Typography, useMediaQuery } from "@mui/material";

import rifas from "../assets/rifas.png";
import mdGlobal from "../assets/mdGlobal.png";
import tiendaTecnologia from "../assets/reactProject.png";
import landing from "../assets/landing.png";
import comidas from "../assets/tiendaComidas.png";
 import backend from "../assets/backend.png";
import todoFloral from "../assets/todoFloral.png";
import repoBlue from "../assets/repoBlue.png";
import web from "../assets/web.png";
import starWars from "../assets/starWars.png";

const Portfolio = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const projectImages = [
    {
      img: starWars,
      title: "Api de Star Wars",
      url: "https://challenge-frontend-developer-gold.vercel.app/",
      github: "https://github.com/Franco97sassi/challengeFrontendDeveloper",
      description:
        "Trabajando con Api de StarWars mostrando sus personajes y respectivas peliculas de la saga.",
        technologies:["NextJs","React","Tailwind Css" ]
      },
      {
        img: mdGlobal,
        title: "MdGlobal",
        url: "https://md-global2024.vercel.app/",
        github: "https://github.com/Franco97sassi/Md-global2024",
        description:
          " El proyecto de importación y exportación de MDGlobal es una plataforma dedicada a simplificar y agilizar los procesos de comercio internacional.",
          technologies: ["React"]
        },
      {
        img: todoFloral,
        title: "Todo Floral",
        url: "https://ecommerce-floral.vercel.app/",
        github: "https://github.com/Franco97sassi/TF",
        description:
          "Ecommerce de un tienda de venta de flores y organización de eventos.",
          technologies: ["React","Material Ui","PostgreSQL"]
      },
      {
        img: landing,
        title: "Landing",
        url: "https://www.techxmx.com/",
        github: "https://github.com/Franco97sassi/Landing",
        description: "Landing de la empresa TechX.",
        technologies:["React","EmailJs,Material Ui"]
  
      },
    {
      img: rifas,
      title: "Rifas El venado",
      url: "https://www.rifaselvenado.com/",
      github: "https://github.com/Franco97sassi/Rifas.git",
      description:
        "Rifas El Venado es un proyecto full-stack dedicado a la venta de indumentaria y la organización de rifas en línea.",
        technologies:["React","Js","Redux","Material Ui","PostgreSQL"]
      },
     
    

   
    {
      img: backend,
      title: "E-Commerce Backend",
      // url: "https://entrega-final-sassi-react-js.vercel.app/",
      github: "https://github.com/Franco97sassi/Backend-Desafios",
      description:
        "Proyecto E-Commerce Full Stack, donde utilizo como base de datos a MongoDB.",
        technologies: ["Mongo DB","Bootstrap"]
    },

    {
      img: tiendaTecnologia,
      title: "Tienda E-Commerce ",
      url: "https://react-firebase-project-zeta.vercel.app/",
      github: "https://github.com/Franco97sassi/reactFirebaseProject",
      description:
        "Mi primer proyecto hecho con React de una tienda de venta de productos de una Fake Store Api.",
        technologies: ["Firebase","React","Material Ui"]
    },
    {
      img: comidas,
      title: "Tienda de comidas",
      url: "https://franco97sassi.github.io/ProyectoFinalJS-Sassi/",
      github: "https://github.com/Franco97sassi/ProyectoFinalJS-Sassi",
      description:
        "Mi primer proyecto con JavaScript que consiste en un negocio de venta de comidas.",
        technologies: ["Js","Bootstrap"]
    },
     // {
    //   img: rosario,
    //   title: "Ciudad de Rosario",
    //   url: "https://proyecto1francosassi.vercel.app/",
    //   github: "https://github.com/Franco97sassi/PF-FrancoSassi",
    //   description:
    //     "Mi primer proyecto realizado en Visual Studio donde aplico patrones de diseño basico como Html, Css y varias librerías.",
    // },
  ];


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin:"100px"
      }}
    >
      <Box
        sx={{
          paddingTop: "20px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{ paddingBottom: "20px" }}
        >
          Mis Proyectos
        </Typography>
        {projectImages.map((project, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ?"flex-start":"center",
              justifyContent: isMobile ?"flex-start":"center",
              backgroundImage: "linear-gradient(#212121,#1a237e,#212121 )",
              padding: "20px",
              margin: "10px",
              borderRadius: "10px",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              },
            }}
          >
            <Box sx={{ width: "15%" }}>
              <img
                src={project.img}
                alt={project.title}
                style={{
                  width: isMobile ? "200px" : "400px",
                  height: "auto",
                  marginRight: isMobile ? "0" : "20px",
                  borderRadius: "10px",
                }}
              />{" "}
            </Box>
            <Box
              sx={{
                width: isMobile?"3px":"75%",
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft:"15%"

              }}
            >
              <Typography variant="h5" color="white"  >
                {project.title}
              </Typography>
              {!isMobile &&(<Box sx={{ width: "55%",padding:10 }}>
                <Typography color="white"> {project.description}</Typography>
                
              </Box>)}
              <Box sx={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                {!isMobile && project.technologies && project.technologies.map((tech, techIndex) => (
                  <Button key={techIndex} variant="contained">
                    {tech}
                  </Button>
                ))}
              </Box>
               <Box sx={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <Button onClick={() => window.open(project.github, "_blank")}>
                  <img src={repoBlue}  width={isMobile ? "20px" : "50px"} alt="GitHub Repo" />
                </Button>
                <Button onClick={() => window.open(project.url, "_blank")}>
                  <img src={web}  width={isMobile ? "20px" : "50px"} alt="Website" />
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Portfolio;
