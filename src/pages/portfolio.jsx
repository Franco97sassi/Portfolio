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
import windowShop from "../assets/windowShop.png";

const Portfolio = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const projectImages = [
    {
      img: starWars,
      title: "Star Wars Api",
      url: "https://challenge-frontend-developer-gold.vercel.app/",
      github: "https://github.com/Franco97sassi/challengeFrontendDeveloper",
      description:
        "Working with the StarWars API to display its characters and respective movies from the saga.",
        technologies:["NextJs","React","Tailwind Css" ]
      },
      {
        img: mdGlobal,
        title: "MdGlobal",
        url: "https://md-global2024.vercel.app/",
        github: "https://github.com/Franco97sassi/Md-global2024",
        description:
        "The MDGlobal import and export project is a platform dedicated to simplifying and streamlining international trade processes." ,
                 technologies: ["React"]
  
      },
        
      {
        img: todoFloral,
        title: "Todo Floral",
        url: "https://ecommerce-floral.vercel.app/",
        github: "https://github.com/Franco97sassi/TF",
        description:
        "E-commerce for a flower shop and event organization.",
 
        technologies: ["React","Material Ui","PostgreSQL"]
      },
      {
        img: landing,
        title: "Landing TechX",
        url: "https://www.techxmx.com/",
        github: "https://github.com/Franco97sassi/Landing",
       description: "Landing page for the company TechX." ,
              technologies:["React","EmailJs","Material Ui"]
  
      },
    {
      img: rifas,
      title: "Rifas El venado",
      url: "https://www.rifaselvenado.com/",
      github: "https://github.com/Franco97sassi/Rifas.git",
      description:
      "Rifas El Venado is a full-stack project dedicated to the sale of clothing and the organization of online raffles."  ,
            technologies:["React","Js","Redux","Material Ui","PostgreSQL"]
      },
     
    

   
    {
      img: backend,
      title: "E-Commerce Backend",
      // url: "https://entrega-final-sassi-react-js.vercel.app/",
      github: "https://github.com/Franco97sassi/Backend-Desafios",
      description:
      "Full Stack E-Commerce Project, where I use MongoDB as the database implementing the corresponding folder architecture. CRUD operations are implemented. Stripe is used as the payment platform.",        technologies: ["Mongo DB","Bootstrap","Docker","Jwt","Nest"]
    },

    {
      img: tiendaTecnologia,
      title: "E-commerce store ",
      url: "https://react-firebase-project-zeta.vercel.app/",
      github: "https://github.com/Franco97sassi/reactFirebaseProject",
      description:
      "My first React project, a product-selling store using a Fake Store API.",





      technologies: ["Firebase","React","Material Ui"]
    },
    {
      img: windowShop,
      title: "Windows and Doors Store",
      url: "https://franco97sassi.github.io/vanillaJsProject/",
      github: "https://github.com/Franco97sassi/vanillaJsProject",
      description:
      "E-Commerce project with Vanilla JS.",





      technologies: ["Js","Bootstrap"]
    },
    {
      img: comidas,
      title: "Food Store",
      url: "https://franco97sassi.github.io/ProyectoFinalJS-Sassi/",
      github: "https://github.com/Franco97sassi/ProyectoFinalJS-Sassi",
      description:
      "My first JavaScript project, which consists of a food-selling business.",





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
          My Projects
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
              <Typography variant="h4" color="white" fontWeight="bold" >
                {project.title}
              </Typography>
              {!isMobile &&(<Box sx={{ width: "55%",padding:10 }}>
                <Typography color="white"> {project.description}</Typography>
                
              </Box>)}
              <Box sx={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                {!isMobile && project.technologies && project.technologies.map((tech, techIndex) => (
                  <Button key={techIndex} sx={{backgroundColor:"#575089"}} variant="contained">
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
