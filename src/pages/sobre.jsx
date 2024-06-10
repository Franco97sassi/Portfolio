import { Box, Typography, useMediaQuery } from "@mui/material";
import fotoTechX from "../assets/fotoTechX.jpg";

const Sobre = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        paddingRight: isMobile ? "00%" : "10%",
        textAlign: "center",
        paddingLeft: isMobile ? "00%" : "0%",
        width: isMobile ? "100%" : "100%",
        display: "flex",
        paddingBottom: "150px",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: isMobile ? "0%" : "0%",
      }}
    >
      <Typography
        variant="h2"
        fontWeight="bold"
        sx={{ textAlign: isMobile ? "center" : "center", paddingBottom: "2%" }}
      >
        About Me
      </Typography>
      <Box sx={{display:"flex" ,flexDirection:isMobile?"column":"row",alignItems:"center"}}>
      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",width:"50%",marginBottom:isMobile?"25px":"0px"}}>
          <img src={fotoTechX} alt="" width={250}  style={{ 
    borderRadius: '8px',  // Bordes redondeados
    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.4), 0px 3px 6px rgba(0, 0, 0, 0.2)'
  }}  />
        </Box>
       
      <Box
        sx={{width:"50%",
          gap: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          
           textAlign: isMobile ? "center" : "justify",
        }}
      >
        <Typography variant="body" sx={{ paddingBottom: "10px" }}>
          I'm from <strong>Rosario, Santa Fe Argentina</strong>. I successfully
          completed the Full Stack Developer career at CoderHouse in 2023. I
          have experience working in multidisciplinary teams and collaborating
          on various projects. My focus is on providing innovative and
          high-quality solutions to meet customer needs.
        </Typography>
        <Typography variant="body" sx={{ paddingBottom: "10px" }}>
          I have been working as a front-end developer for over a year at a
          start-up, where my tasks have included modifying and enhancing user
          interfaces, fixing bugs, and collaborating with the backend and
          testing teams.
        </Typography>
        <Typography variant="body" sx={{ paddingBottom: "10px" }}></Typography>
<Box sx={{width:"100%"}}>  
        <Typography variant="h4" fontWeight="bold" fontStyle="italic" sx={{ textDecoration: "underline" , color: "#03a9f4",}}>
           Achievements  
        </Typography>
        <Typography
          variant="body"
          component="li"
          sx={{
            color: "#03a9f4",
            fontWeight: "bold",
            "&:hover": {
              color: "white",
            },
          }}
        >
          {" "}
          Proficient in visual interface development and responsive design
          implementation.
        </Typography>
        <Typography
          variant="body"
          component="li"
          sx={{
            color: "#03a9f4",
            fontWeight: "bold",
            "&:hover": {
              color: "white",
            },
          }}
        >
          {" "}
          Successfully I collaborated with back-end developers to seamlessly
          integrate APIs, web services, and interact with databases such as
          PostgreSQL across 3 to 5 projects.
        </Typography>

        <Typography
          variant="body"
          component="li"
          sx={{
            color: "#03a9f4",
            fontWeight: "bold",
            "&:hover": {
              color: "white",
            },
          }}
        >
          {" "}
          Working together closely with UX/UI designers for designs created in
          Figma.
        </Typography>
        <Typography
          variant="body"
          component="li"
          sx={{
            color: "#03a9f4",
            fontWeight: "bold",
            "&:hover": {
              color: "white",
            },
          }}
        >
          {" "}
          Demonstrated proficiency in managing E-commerce and payment platforms.
        </Typography></Box>
      </Box>{" "}</Box>
    </Box>
  );
};

export default Sobre;
