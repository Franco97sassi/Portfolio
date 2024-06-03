import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; // Importa Link de react-router-dom
import { motion } from "framer-motion";
import githubIcon from "../assets/githubIcon.png";
import linkedinIcon from "../assets/linkedinIcon.png";
import emailIcon from "../assets/emailIcon.png";

const Home = () => {
  // const handlePortfolioClick = () => {
  //   const portfolioSection = document.getElementById("portfolio");
  //   portfolioSection.scrollIntoView({ behavior: "smooth" });
  // };
   
  const buttonStyles = {
    background: "linear-gradient(#17202A,#1B4F72)",
    borderRadius: "999px",
    display: "flex",
    flexDirection: "row",
    width: "100px",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxShadow:
      "0px 5px 15px 0px rgba(37, 44, 97, 0.15), 0px 2px 4px 0px rgba(136, 144, 194, 0.2)",
    overflow: "hidden",
    fontSize: "16px",
    "&:hover": {
      background: "linear-gradient(#512E5F,#1A5276)",
      boxShadow:
        "0px 5px 15px 0px rgba(37, 44, 97, 0.15), 0px 2px 4px 0px rgba(136, 144, 194, 0.20)",
    },
  };

  const isMobile = useMediaQuery("(max-width:600px)");

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } } // Ajusta la duración de la transición
  };

  return (
    <Box sx={{ display: "flex", flexDirection:isMobile ?"column": "row",justifyContent:"center",alignItems:"center" }}>
      <Box sx={{ paddingLeft: isMobile ? "10%" : "0%", width: isMobile ? "100%" : "75%", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", marginBottom: isMobile ? "72%" : "0%" }}>
        <motion.div initial="hidden" animate="visible" variants={{visible: {transition: {staggerChildren: 0.2}}}}>
          <motion.div variants={itemVariants}>
            <Typography variant="h2" paddingBottom={1} fontWeight="bold" textAlign="center">
              Hola, soy Franco Sassi.
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography variant="h3" paddingBottom={2} textAlign="center">
              Desarrollador React Full Stack.
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants} >
            <Box sx={{display:"flex",gap:"10px",flexDirection:isMobile?"column":"row",justifyContent:"center",alignItems:"center"}} > 
           
            {/* <Button
              sx={buttonStyles}
              variant="contained"
              component={RouterLink}
              to="/#portfolio"
              onClick={handlePortfolioClick}
            >
              Portfolio
            </Button> */}
            <Button
                width="50px"
                 
                component= "a"
               href="https://github.com/Franco97sassi"
             >
              <img src={githubIcon} width="50px" alt="" />
            </Button>
            <Button
                component= "a"
                href="https://www.linkedin.com/in/franco-sassi-777b0317a/"            >
              <img src={linkedinIcon} alt=""  width="50px" />
            </Button>
            <Box s >  
            <Button
      component="a"
      href="mailto:franco.sassi97@gmail.com"
                variant="contained"  
            >
              <img src={emailIcon}  width="50px" alt="" /> 
              <Typography sx={{padding:"10px"}} >franco.sassi97@gmail.com</Typography>
            </Button></Box>
             </Box>
          </motion.div>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Home;
