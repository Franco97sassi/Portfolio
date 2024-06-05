import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
  makeStyles,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link as ScrollLink, Element, scroller } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import fotoTechX from "../assets/fotoTechX.jpg";

const Sobre = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
      <Box
        sx={{
          paddingRight: isMobile ? "10%" : "25%",
          textAlign: "center",
          paddingLeft: isMobile ? "10%" : "25%",
          width: isMobile ? "100%" : "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
           marginBottom: isMobile ? "72%" : "0%",
        }}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{ textAlign: isMobile ? "center" : "center", paddingBottom: "2%" }}
        >
          About Me
        </Typography>
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
            filter: ["brightness(0.8)", "brightness(1)", "brightness(0.8)"],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Box
            sx={{
              gap: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: isMobile ? "center" : "center",
             }}
          >
            <Typography variant="body" fontWeight="bold">
              I'm from Rosario, Santa Fe Argentina. I successfully completed the
              Front End Developer career at CoderHouse in 2023.
            </Typography>
            <Typography variant="body">
              I consider myself a dedicated professional, willing to perform
              various tasks as required.
            </Typography>
            <Typography variant="body" fontWeight="bold">
              I have experience working in multidisciplinary teams and
              collaborating on various projects. My focus is on providing
              innovative and high-quality solutions to meet customer needs.
            </Typography>
            <Typography variant="body">
              My goal is to continue advancing in the field of information
              technology, exploring new projects, and expanding my knowledge in
              the latest technologies. I am committed to staying up-to-date with
              trends and advancements in the computing field, and I am excited
              about the opportunity to apply my skills to solve technological
              challenges and contribute to the success of innovative projects.
            </Typography>
            <Typography variant="body" fontWeight="bold" >
              I have experience in :
            </Typography>
            <Typography variant="body" component="li">
              Proficient in visual interface development and responsive design
              implementation.
            </Typography>
            <Typography variant="body" component="li">
              Successfully I collaborated with back-end developers to seamlessly
              integrate APIs, web services, and interact with databases such as
              PostgreSQL across 3 to 5 projects.
            </Typography>

            <Typography variant="body" component="li">
              Working together closely with UX/UI designers for designs created
              in Figma.
            </Typography>
            <Typography variant="body" component="li">
              Demonstrated proficiency in managing E-commerce and payment
              platforms.
            </Typography>
          </Box>{" "}
        </motion.div>
      </Box>
    </Element>
  );
};

export default Sobre;
