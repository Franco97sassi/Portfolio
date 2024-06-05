 import Home from "./home";
import Sobre from "./sobre";
import Portfolio from "./portfolio";
import Experiencia from "./experiencia";
import Contacto from "./contacto";
import { Box, useMediaQuery } from "@mui/material";
 
const General = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  
  return (
    <div>
      <Box
        sx={{ backgroundImage: "linear-gradient(#212121,#1a237e,#212121 )" }}
      >
          <section id="home">
          {" "}
          <Home />
        </section>
        <section id="profile">
          {" "}
          <Sobre />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="technologies">
          <Experiencia />
        </section>
        <section id="contact">
          {" "}
          <Contacto />
        </section>  
        
      </Box>
    </div>
  );
};

export default General;
