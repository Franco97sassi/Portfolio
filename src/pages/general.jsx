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
  const isMobile = useMediaQuery("(max-width:763px)");

  const sectionStyle = {
    padding: isMobile ? "20px" : "40px",
    color: isDarkMode ? "#ffffff" : "#000000",
  };

  return (
    <div>
      <Box
        sx={{
          backgroundImage: isDarkMode
            ? "linear-gradient(#000000,#212121,#000000 )"
            : `linear-gradient(#bdbdbd, #ffffff, #bdbdbd)`,
            transition: "background-image 0.3s",
        }}
      >
        <section id="home" style={sectionStyle}  >
          <Home />
        </section>
        <section id="profile" style={sectionStyle} data-aos="fade-right" data-aos-delay="200">
          <Sobre  isDarkMode={isDarkMode} />
        </section>
        <section id="portfolio" style={sectionStyle} data-aos="fade-right" data-aos-delay="200">
          <Portfolio isDarkMode={isDarkMode} />
        </section>
        <section id="skills" style={sectionStyle} data-aos="fade-right"data-aos-delay="200">
          <Experiencia  isDarkMode={isDarkMode}/>
        </section>
        <section id="contact" style={sectionStyle} data-aos="fade-right" data-aos-duration="800">
          <Contacto isDarkMode={isDarkMode}  />
        </section>
        <Footer />
      </Box>
    </div>
  );
};

export default General;
