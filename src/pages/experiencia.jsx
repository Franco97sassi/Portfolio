import {   Box, Grid, Typography } from '@mui/material';
import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import js from "../assets/js.png";
import node from "../assets/node.png";
import rct from "../assets/rct.png";

const Experiencia = () => {
  const itemData = [
    { img: html, title: 'Html' },
    { img: css, title: 'Css' },
    { img: github, title: 'Github' },
    { img: js, title: 'Js' },
    { img: rct, title: 'React' },
    { img: html, title: 'Honey' },
   
   ];

  return (
    <div>  
    <Box sx={{height: "100vh",alignContent:"center"  }}>
       <Typography  variant="h2"  sx={{paddingLeft:"10%"}}  >Experiencia</Typography> 
      <Box sx={{ width: '100%' }}>
        <Grid sx={{display: "flex",justifyContent:"space-evenly",alignItems:"center" }} container rowSpacing={3} padding={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {itemData.map((item, index) => (
            <Grid key={index} item xs={3}  >
             <Box sx={{   p: 1, display: 'flex',flexDirection:"column", justifyContent: 'center', alignItems: 'center' }}>
             <img src={item.img} style={{ width: "100%", maxWidth: "150px" }} alt={item.title} />
              <Typography variant="h5">{item.title}</Typography>
            </Box>

            </Grid>
          ))}
        </Grid>
      </Box>
    </Box> </div>
  );
}

export default Experiencia;
