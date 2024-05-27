import React, { useContext } from "react";
import Home from "./home";
import Sobre from "./sobre";
import Portfolio from "./portfolio";
import Experiencia from "./experiencia";
import Contacto from "./contacto";
import { Box, useMediaQuery } from "@mui/material";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import curriculum from "../assets/curriculum.png";

const General = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleDownload = () => {
    // Redireccionar a la URL del PDF en Google Drive
    window.location.href =
      "https://drive.google.com/file/d/1dkUQdXoeBMY4fm5HLJtZdf_6ns-740Bd/view?usp=drive_link";
  };
  return (
    <div>
      <Box
        sx={{ backgroundImage: "linear-gradient(#263238, #212121,#263238 )" }}
      >
        <section id="inicio">
          {" "}
          <Home />
        </section>
        <section id="perfil">
          {" "}
          <Sobre />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="tecnologías">
          <Experiencia />
        </section>
        <section id="contacto">
          {" "}
          <Contacto />
        </section>
        <div
          style={{
            position: "fixed",
            top:isMobile ?"95%": "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection:isMobile ?"row" :"column",
            alignItems: "center",
            
            gap: "10px",
            right: isMobile ? "unset" : "1%",
            left: isMobile ? "25%" : "unset",
          }}
        >
          <a href="https://github.com/Franco97sassi?tab=repositories">
            <img src={github} alt="" style={{  width: "50px"   }} />
          </a>
          <a href="https://www.linkedin.com/in/franco-sassi-777b0317a/">
            {" "}
            <img src={linkedin} alt="" style={{ width: "50px" }} />
          </a>
          <a
            href="https://drive.google.com/file/d/1dkUQdXoeBMY4fm5HLJtZdf_6ns-740Bd/view?usp=drive_link"
            download
          >
            <img src={curriculum} alt="" style={{ width: "50px" }} />
          </a>
        </div>
      </Box>
    </div>
  );
};

export default General;
