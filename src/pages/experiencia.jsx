import {   Box, Grid, Typography, useMediaQuery } from '@mui/material';
import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import js from "../assets/js.png";
import node from "../assets/node.png";
import rct from "../assets/rct.png";
import sass from "../assets/sass.png";
import mongo from "../assets/mongoDB.png";
import firebase from "../assets/firebase.png";

import { useState } from 'react';
import bootstrap from "../assets/bootstrap.png";
const Experiencia = () => {
  const isMobile=useMediaQuery('(max-width:600px)')

  const itemData = [
    { img: html, title: 'Html' },
    { img: css, title: 'Css' },
    { img: github, title: 'Github' },
    { img: js, title: 'Js' },
    { img: rct, title: 'React' },
    { img: bootstrap, title: 'Bootstrap' },
    { img: node, title: 'Node Js' },
    { img: sass, title: 'SASS' },
    { img: firebase, title: 'Firebase' },

     { img: mongo, title: 'MongoDB' },

   ];
   const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>  
    <Box sx={{height: "100vh",alignContent:"center" ,marginBottom:isMobile?"50%":"0%"  }}>
        <Box sx={{display:"flex",flexDirection:"column",paddingLeft:isMobile?"00%":"10%"}}>  
 
 <Typography  variant="h2" sx={{   textAlign:isMobile?"center":"left" }} >Tecnologías</Typography>
 
 <Typography variant="h5"  sx={{   textAlign:isMobile?"center":"left" }}>Estas son las tecnologías con las cuales he estado trabajando.</Typography>
 </Box>
      <Box sx={{ width: '100%' }}>
        <Grid sx={{display: "flex",flexDirection:isMobile?"column":"row",justifyContent:"space-evenly",alignItems:"center" }} container rowSpacing={3} padding={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {itemData.map((item, index) => (
              <Grid key={index} item xs={3} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                <Box sx={{   p: 1, display: 'flex',flexDirection:"column", justifyContent: 'center', alignItems: 'center', transition: 'transform 0.3s', transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)' }}>
             <img src={item.img} style={{ width: "100%", maxWidth: "150px" }} alt={item.title} />
              {/* <Typography variant="h5">{item.title}</Typography> */}
            </Box>

            </Grid>
          ))}
        </Grid>
      </Box>






     

    </Box> </div>
  );
}

export default Experiencia;
