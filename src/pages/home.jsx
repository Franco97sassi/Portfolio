// Home.jsx
import React from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import LinkedinIcon from "../assets/linkedinIcon";
import CvIcon from "../assets/CvIcon";
import GithubIcon from "../assets/githubIcon";
import EmailIcon from "../assets/EmailIcon";

const Home = () => {
  const isMobile = useMediaQuery("(max-width:763px)");
  const lg = useMediaQuery("(min-width:1600px)");
  const { t } = useTranslation(); // Hook de traducción

  const textSize1 = lg ? "h1" : "h2";
  const textSize2 = lg ? "h2" : "h3";
  const textSize3 = lg ? "h3" : "h4";

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const AnimatedText = ({ text }) => (
    <Typography
      variant={textSize1}
      paddingBottom={1}
      fontWeight="bold"
      textAlign="center"
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </Typography>
  );

  const AnimatedName = ({ text }) => (
    <Typography
      variant={textSize2}
      paddingBottom={2}
      textAlign="center"
      fontWeight="bold"
      sx={{ color: "#0091ea" }}
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </Typography>
  );

  const AnimatedJobTitle = ({ text }) => (
    <Typography variant={textSize3} paddingBottom={2} textAlign="center">
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </Typography>
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: isMobile ? "10%" : "0%",
        paddingRight: isMobile ? "10%" : "0%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginBottom: isMobile ? "72%" : "0%",
        }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <AnimatedText text={t("home.greeting")} />
          <AnimatedName text={t("home.name")} />
          <AnimatedJobTitle text={t("home.jobTitle")} />
          <motion.div variants={letterVariants}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center", 
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <Box sx={{ height: "40px" }}>
                    <Button
                      height="40px"
                      component="a"
                      href="https://github.com/Franco97sassi"
                      sx={{
                        "&:hover": {
                          backgroundColor: "lightblue",
                        },
                      }}
                    >
                      <GithubIcon />
                    </Button>
                  </Box>
                  <Button
                    component="a"
                    href="https://www.linkedin.com/in/sassifranco"
                    sx={{
                      "&:hover": {
                        backgroundColor: "lightblue",
                      },
                    }}
                  >
                    <LinkedinIcon />
                  </Button>
                  <Button
                    component="a"
                    href="https://drive.google.com/file/d/1FMBMZK3wc15jqk-k69NNYN70qsILxBrU/view?usp=sharing"
                    sx={{
                      "&:hover": {
                        backgroundColor: "lightblue",
                      },
                    }}
                  >
                    <CvIcon />
                  </Button>
                </Box>
                <Box >
                  <Button
                    component="a"
                    href="mailto:franco.sassi97@gmail.com"
                    variant="contained"
                    sx={{
                       background: "#0091ea",
                      height: "max-content",
                      borderRadius: "50px",
                      "&:hover": {
                        backgroundColor: "lightblue",
                        
                      },
                    }}
                  >
                    <EmailIcon />
                    <Typography sx={{ padding: "10px",color:"white" , "&:hover": {
      color: "black"
    } }}>
                      franco.sassi97@gmail.com
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
          </motion.div>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Home;
