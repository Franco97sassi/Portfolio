import {
  Box,
 
  Typography,
   useMediaQuery,
} from "@mui/material";
import fotoTechX from "../assets/fotoTechX.jpg";

const Sobre = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
 

  return (
       <Box
        sx={{
          paddingRight: isMobile ? "10%" : "25%",
          textAlign: "center",
          paddingLeft: isMobile ? "10%" : "25%",
          width: isMobile ? "100%" : "100%",
          display: "flex",paddingBottom:"150px",
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
         <Box></Box>
          <Box
            sx={{
              gap: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems:"center",
              textAlign: isMobile ? "center" : "center",
             }}
          >
            <Typography variant="body" sx={{paddingBottom:"10px"}}  >
              I'm from  <strong>Rosario, Santa Fe Argentina</strong>. I successfully completed the
              Front End Developer career at CoderHouse in 2023.
            </Typography>
             <Typography variant="body" fontWeight="bold"  sx={{paddingBottom:"10px"}} >
              I have experience working in multidisciplinary teams and
              collaborating on various projects. My focus is on providing
              innovative and high-quality solutions to meet customer needs.
            </Typography>
            
             <Typography variant="body"   >
              My achievements so far :
            </Typography>
            <Typography variant="body" component="li"color="#03a9f4"fontWeight="bold">
              Proficient in visual interface development and responsive design
              implementation.
            </Typography>
            <Typography variant="body" component="li"color="#03a9f4" fontWeight="bold">
              Successfully I collaborated with back-end developers to seamlessly
              integrate APIs, web services, and interact with databases such as
              PostgreSQL across 3 to 5 projects.
            </Typography>

            <Typography variant="body" component="li" color="#03a9f4"fontWeight="bold">
              Working together closely with UX/UI designers for designs created
              in Figma.
            </Typography>
            <Typography variant="body" component="li"color="#03a9f4" fontWeight="bold">
              Demonstrated proficiency in managing E-commerce and payment
              platforms.
            </Typography>
          </Box>{" "}
         
      </Box>
   );
};

export default Sobre;
