import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link as ScrollLink, Element, scroller } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';

const Sobre = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isScrolled) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.3,
        },
      });
    }
  }, [isScrolled, controls]);

  
  return (
    <Element name="aboutSection">
      <Box sx={{  paddingRight: isMobile ? '10%' : '0%', textAlign: 'center', paddingLeft: isMobile ? '10%' : '10%', width: isMobile ? '100%' : '75%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',textAlign:"left" ,marginBottom: isMobile ? '72%' : '0%' }}>
        <Typography variant="h2" fontWeight="bold" sx={{ textAlign:isMobile ? 'center':"left",  paddingBottom: '2%' }}>Sobre Mí</Typography>
        <motion.div   animate={{ opacity: [0.5, 1, 0.5], filter: ['brightness(0.8)', 'brightness(1)', 'brightness(0.8)'] }} transition={{ duration: 2, repeat: Infinity }}>
        <Box sx={{gap:"10px",display:"flex",flexDirection:"column",justifyContent:"center",textAlign:isMobile?"center":"left"}}> 
          <Typography  variant="body" fontWeight= "bold"   >Soy Rosario, Santa Fe Argentina. Completé con éxito la carrera de Desarrollador Front End en CoderHouse en 2023.</Typography>
           <Typography variant="body">Me considero un profesional dedicado y predispuesto a realizar las distintas tareas que tenga que llevar a cabo.</Typography>
           <Typography variant="body"fontWeight= "bold"  >Poseo experiencia trabajando en equipos multidisciplinarios y colaborando en diversos proyectos. Mi enfoque se centra en ofrecer soluciones innovadoras y de alta calidad para satisfacer las necesidades de los clientes.</Typography>
           <Typography variant="body" >Mi objetivo es continuar avanzando en el mundo de la tecnología de la información, explorando nuevos proyectos y expandiendo mis conocimientos en las últimas tecnologías. Estoy comprometido a mantenerme al día con las tendencias y los avances en el campo de la informática, y estoy emocionado por la oportunidad de aplicar mis habilidades para resolver desafíos tecnológicos y contribuir al éxito de proyectos innovadores.</Typography>
          </Box>  </motion.div>
      </Box>
      
    </Element>
  );
};

export default Sobre;
