// General.jsx
import React from 'react';
import Home from "./home";
import Sobre from "./sobre";
import Portfolio from "./portfolio";
import Experiencia from "./experiencia";
import Contacto from "./contacto";
import { Box, useMediaQuery } from "@mui/material";
import Footer from "./Footer";

const General = ({ isDarkMode }) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const sectionStyle = {
    padding: isMobile ? "20px" : "40px",
    color: isDarkMode ? "#ffffff" : "#000000",
  };

  return (
    <div>
      <Box
        sx={{
          backgroundImage: isDarkMode
            ? "linear-gradient(#212121,#1a237e,#212121 )"
            : `linear-gradient(#bdbdbd, #ffffff, #bdbdbd)`,
            transition: "background-image 0.3s",
        }}
      >
        <section id="home" style={sectionStyle}>
          <Home />
        </section>
        <section id="profile" style={sectionStyle}>
          <Sobre />
        </section>
        <section id="portfolio" style={sectionStyle}>
          <Portfolio isDarkMode={isDarkMode} />
        </section>
        <section id="technologies" style={sectionStyle}>
          <Experiencia />
        </section>
        <section id="contact" style={sectionStyle}>
          <Contacto isDarkMode={isDarkMode}  />
        </section>
        <Footer />
      </Box>
    </div>
  );
};

export default General;
