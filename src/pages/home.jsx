import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; // Importa Link de react-router-dom
import { motion } from "framer-motion";

const Home = () => {
  const handlePortfolioClick = () => {
    const portfolioSection = document.getElementById("portfolio");
    portfolioSection.scrollIntoView({ behavior: "smooth" });
  };

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
    <Box sx={{ display: "flex", flexDirection:isMobile ?"column": "row" }}>
      <Box sx={{ paddingLeft: isMobile ? "10%" : "10%", width: isMobile ? "100%" : "75%", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", marginBottom: isMobile ? "72%" : "0%" }}>
        <motion.div initial="hidden" animate="visible" variants={{visible: {transition: {staggerChildren: 0.2}}}}>
          <motion.div variants={itemVariants}>
            <Typography variant="h2" paddingBottom={1} fontWeight="bold">
              Hola, soy Franco Sassi.
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography variant="h3" paddingBottom={2}>
              Desarrollador React Full Stack.
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Button
              sx={buttonStyles}
              variant="contained"
              component={RouterLink}
              to="/#portfolio"
              onClick={handlePortfolioClick}
            >
              Portfolio
            </Button>
          </motion.div>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Home;
