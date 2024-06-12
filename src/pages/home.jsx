import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; // Importa Link de react-router-dom
import { motion } from "framer-motion";
import githubIcon from "../assets/githubIcon.png";
import linkedinIcon from "../assets/linkedinIcon.png";
import emailIcon from "../assets/emailIcon.png";
import fotoTechX from "../assets/fotoTechX.jpg";
import cvIcon from "../assets/cvIcon.png";

const Home = () => {
  

  const isMobile = useMediaQuery("(max-width:600px)"); 
const lg= useMediaQuery("( min-width:1600px)");
const textSize1=lg?"h1":"h2";
const textSize2=lg?"h2":"h3";
const textSize3=lg?"h3":"h4";

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const sentence = "Hello, I'm";
  const name = "Franco Sassi.";

  const jobTitle = "Full Stack React Developer.";

  const AnimatedText = ({ text }) => (
    <Typography   variant={textSize1} 
    paddingBottom={1} fontWeight="bold" textAlign="center">
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </Typography>
  );
  const AnimatedName = ({ text }) => (
    <Typography variant={textSize2} paddingBottom={2} textAlign="center" fontWeight="bold" sx={{color:"#0091ea"}} >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </Typography>
  );
  const AnimatedJobTitle = ({ text }) => (
    <Typography variant={textSize3} paddingBottom={2} textAlign="center"   >
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
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: isMobile ? "10%" : "0%",
        paddingRight: isMobile ? "10%" : "0%",

      }}
    >
      <Box
        sx={{
          paddingLeft: isMobile ? "0%" : "0%",
          width: isMobile ? "100%" : "75%",
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
          <AnimatedText text={sentence} />
          <AnimatedName text={name} />

          <AnimatedJobTitle text={jobTitle} />
          <motion.div variants={letterVariants}>
            <Box>  
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                flexDirection: isMobile ? "column" : "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{display:"flex"}}> 
              <Button
                width="50px"
                component="a"
                href="https://github.com/Franco97sassi"
                sx={{
                  "&:hover": {
                    backgroundColor: "lightblue",
                  },
                }}
              >
                <img src={githubIcon} width="40px" alt="" />
              </Button>
              <Button
                component="a" 
                href="https://www.linkedin.com/in/franco-sassi-777b0317a/"
                sx={{
                  "&:hover": {
                    backgroundColor: "lightblue",
                  },
                }}
              >
                <img src={linkedinIcon} alt="" width="40px" />
              </Button>
              <Button
                component="a" 
                    href="https://drive.google.com/file/d/1rmhZd1-tvjz85cce9azqUs5yy8fMlSuo/view?usp=sharing"
                sx={{
                  "&:hover": {
                    backgroundColor: "lightblue",
                  },
                }}
              >
                <img src={cvIcon} alt="" width="40px" />
              </Button> </Box>
              <Box  >
                <Button
                  component="a"
                  href="mailto:franco.sassi97@gmail.com"
                  variant="contained"               

                  sx={{borderRadius:"50px",backgroundColor:"#0091e", "&:hover": {
                    backgroundColor: "lightblue",color:"black"
                  },}}
                >
                  <img src={emailIcon} width="30px" alt="" />
                  <Typography sx={{ padding: "10px" }}>
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
