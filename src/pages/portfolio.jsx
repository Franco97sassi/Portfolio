import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";

import starWars from "../assets/starWars.png";
import mdGlobal from "../assets/mdGlobal.png";
import todoFloral from "../assets/todoFloral.png";
import landing from "../assets/landing.png";
import rifas from "../assets/rifas.png";
import tiendaTecnologia from "../assets/reactProject.png";
import windowShop from "../assets/windowShop.png";
import comidas from "../assets/tiendaComidas.png";
import backend from "../assets/backend.png";
import repoBlue from "../assets/repoBlue.png";
import pythonProject from "../assets/pythonProject.png";

import web from "../assets/web.png";
import { useTranslation } from "react-i18next"; // Asegúrate de importar esto

const Portfolio = ({isDarkMode }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { t } = useTranslation(); // Esto te da acceso a las traducciones

  const projectImages = [
    {
      img: starWars,
      title: t("portfolio.projects.0.title"),
      url: "https://challenge-frontend-developer-gold.vercel.app/",
      github: "https://github.com/Franco97sassi/challengeFrontendDeveloper",
      description: t("portfolio.projects.0.description"),
             technologies: ["NextJs", "React", "Tailwind CSS"],

     },
    {
      img: mdGlobal,
      title: t("portfolio.projects.1.title"),
      url: "https://md-global2024.vercel.app/",
      github: "https://github.com/Franco97sassi/Md-global2024",
      description: t("portfolio.projects.1.description"),
      technologies: ["React"],
    },
    {
      img: todoFloral,
      title: "Todo Floral",
       url: "https://www.todofloral.com/",
      github: "https://github.com/Franco97sassi/TF",
      description: t("portfolio.projects.2.description"),
      technologies: ["React", "Material UI", "PostgreSQL"],
    },
    {
      img: landing,
      title: t("portfolio.projects.3.title"),
      url: "https://www.techxmx.com/",
      github: "https://github.com/Franco97sassi/Landing",
      description: t("portfolio.projects.3.description"),
      technologies: ["React", "EmailJS", "Material UI"],
    },
    {
      img: rifas,
      title: t("portfolio.projects.4.title"),
      url: "https://www.rifaselvenado.com/",
      github: "https://github.com/Franco97sassi/Rifas.git",
      description: t("portfolio.projects.4.description"),
      technologies: ["React", "JS", "Redux", "Material UI", "PostgreSQL"],
    },
    {
      img: tiendaTecnologia,
      title: t("portfolio.projects.5.title"),
      url: "https://react-firebase-project-zeta.vercel.app/",
      github: "https://github.com/Franco97sassi/reactFirebaseProject",
      description: t("portfolio.projects.5.description"),
      technologies: ["Firebase", "React", "Material UI"],
    },
    {
      img: windowShop,
      title: t("portfolio.projects.6.title"),
      url: "https://franco97sassi.github.io/vanillaJsProject/",
      github: "https://github.com/Franco97sassi/vanillaJsProject",
      description: t("portfolio.projects.6.description"),
      technologies: ["JS", "Bootstrap"],
    },
    {
      img: comidas,
      title: t("portfolio.projects.7.title"),
      url: "https://franco97sassi.github.io/ProyectoFinalJS-Sassi/",
      github: "https://github.com/Franco97sassi/ProyectoFinalJS-Sassi",
      description: t("portfolio.projects.7.description"),
      technologies: ["JS", "Bootstrap"],
    },
    {
      img: backend,
      title: "E-Commerce Backend",
       url: "https://backend-desafios.onrender.com/",
      github: "https://github.com/Franco97sassi/Backend-Desafios",
      description: t("portfolio.projects.8.description"),
      technologies: ["Mongo", "Bootstrap", "Jwt", "Handlebars"],
    },
    {
      img: pythonProject,
      title: "Farm Project",
      //  url: "https://backend-desafios.onrender.com/",
      github: "https://github.com/Franco97sassi/pythonProjectFarm",
      description: t("portfolio.projects.9.description"),
      technologies: ["Python", "Django"],
    },
  ];

  return (
    <Box>
      <Box>
        <Typography variant="h2" fontWeight="bold" fontStyle="italic" sx={{ paddingBottom: "20px", textAlign: "center" }}>
          {t("portfolio.title")}
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", rowGap: 10, columnGap: 50, paddingLeft: "50px", paddingRight: "50px" }}>
          {projectImages.map((project, index) => (
            <div key={index}>
              <Card
                key={index}
                sx={{ maxWidth: 345, backgroundImage:isDarkMode ?  "linear-gradient(#1a237e,#212121,#212121 )":"linear-gradient(gray,white,gray )", borderRadius: "5%", transition: "transform 0.3s, box-shadow 0.3s", "&:hover": { transform: "scale(1.15)", boxShadow: "0 10px 20px rgba(0,0,0,0.2)" } }}
              >
                <CardMedia
                  component="img"
                  alt="proyect"
                  height="150"
                  image={project.img}
                  sx={{ borderBottomLeftRadius: "5%", borderBottomRightRadius: "5%" }}
                />
                <CardContent sx={{ textAlign: "center", height: isMobile ? "null" : "125px" }}>
                  <Typography fontWeight="bold"  gutterBottom variant="h4" color={isDarkMode ? "white" : "black"}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color={isDarkMode ? "white" : "black"}>
                    {project.description}
                  </Typography>
                  
                </CardContent>
                <CardActions sx={{ display: "flex", flexDirection: "column" }}>
                <Box
  sx={{
    display: "flex",
    justifyContent: "space-between",
    gap: "50px",
    flexWrap: "wrap",
    marginTop: "10px",
    height: "100px", // Ajusta el alto de los botones aquí

  }}
>
  <Box sx={{ display: "flex",  justifyContent: "center", flexWrap: "wrap",gap:"10px" }}>
    { 
      project.technologies &&
      project.technologies.map((tech, techIndex) => (
        <Button
          key={techIndex}
          sx={{
             
            backgroundColor: "#575089",
            height: "40px", // Ajusta el alto de los botones aquí
            marginRight: "0px", // Ajusta el espaciado horizontal entre los botones
          }}
          variant={isDarkMode ? "outlined" : "contained"} // Establece el variant del botón según el modo
          >
          {tech}
        </Button>
      ))}
  </Box>
</Box>

                  <Box sx={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                    <Button onClick={() => window.open(project.github, "_blank")}>
                      <img src={repoBlue} width={isMobile ? "35px" : "50px"} alt="GitHub Repo" />
                    </Button>
                    <Button onClick={() => window.open(project.url, "_blank")}>
                      <img src={web} width={isMobile ? "35px" : "50px"} alt="Website" />
                    </Button>
                  </Box>
                </CardActions>
              </Card>
            </div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Portfolio;







 
