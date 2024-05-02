import { Box, Grid, Typography, Modal, useMediaQuery } from '@mui/material';
import rifas from "../assets/rifas.png";
import mdGlobal from "../assets/mdGlobal.png";
import tiendaTecnologia from "../assets/tiendaTecnologia.png";
import landing from "../assets/landing.png";

import { useState } from 'react';


const Portfolio = () => {
  const isMobile=useMediaQuery('(max-width:600px)')

  const itemData = [
    {
      img: rifas,
      title: 'Rifas El venado',
      url: "https://www.rifaselvenado.com/",
      github: "https://github.com/Franco97sassi/Rifas.git",
      description: "Rifas El Venado es un proyecto dedicado a la venta de productos y la organización de rifas en línea. Diseñado para brindar una experiencia intuitiva y conveniente tanto para los compradores como para los organizadores de rifas,  este proyecto utiliza tecnologías modernas para ofrecer una plataforma segura y fácil de  usar"
    },

    {
      img: mdGlobal,
      title: 'MdGlobal',
      url: "https://md-global2024.vercel.app/",
      github: "https://github.com/Franco97sassi/Rifas.git",
      description: " El proyecto de importación y exportación es una plataforma dedicada a simplificar y agilizar los procesos de comercio internacional, especialmente en lo que respecta a la relación con la aduana. Diseñado para empresas y profesionales del sector, este proyecto ofrece herramientas y servicios que optimizan la gestión de importaciones y exportaciones, reduciendo costos y tiempos de trámite."
    },

    {
      img: tiendaTecnologia,
      title: 'Venta de Aparatos Teconológicos',
      url: "https://entrega-final-sassi-react-js.vercel.app/",
      github: "https://github.com/Franco97sassi/EntregaFinal-Sassi-ReactJs",
      description : "Nuestra tienda de aparatos tecnológicos es el destino perfecto para los entusiastas de la tecnología que buscan los últimos dispositivos y gadgets innovadores. Con una amplia gama de productos que van desde teléfonos inteligentes y computadoras portátiles hasta dispositivos domésticos inteligentes y accesorios de alta tecnología, nuestra tienda se enorgullece de ofrecer lo mejor en tecnología de vanguardia"
    },
    {
      img: landing,
      title: 'Landing de Empresa TechX',
      url: "https://landing-tau-ten.vercel.app/",
      github: "https://github.com/Franco97sassi/EntregaFinal-Sassi-ReactJs",
      description: "Somos una empresa líder en tecnología dedicada a ofrecer soluciones innovadoras para satisfacer las necesidades de nuestros  clientes."
    }   ,
   
  
  ]

  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDescriptionClick = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };





  const [hoveredIndex, setHoveredIndex] = useState(null);

 

  return (
    <Box sx={{  padding: isMobile ? "none" : "2%" ,height: "100vh",flexDirection:isMobile?"column":"row", alignContent: "center",marginBottom:isMobile?"200px":"none" }}>
      <Typography textAlign={isMobile?"center":"left"} sx={{ paddingLeft: isMobile?"0%":"10%",paddingBottom:"5%" }} variant="h2" color="white">Portfolio</Typography>


      <Box >
        <Grid sx={{ display: "flex",flexDirection:isMobile?"column":"row", justifyContent: "space-evenly", alignItems: "center" }} container rowSpacing={10} padding={isMobile?"5":"5"} columnSpacing={{ xs: 0, sm: 2, md: 3 }}>
          {itemData.map((item, index) => (
            <Grid key={index}   item xs={3} sx={{ width:"100%",display:"flex",flexDirection:"column",justifyContent: 'center', alignItems: 'center' }}   >
              {/* <Typography variant= {isMobile?"h5":"h4"} sx={{display:isMobile?"flex":"flex", textAlign: "center"  }}  >{item.title} </Typography> */}

              {/* <Box sx={{   borderRadius: "5%", border:isMobile?"none": '1px solid grey', display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <img src={item.img} style={{   width: isMobile?"250px":"100%", borderRadius: "5%" }} alt={item.title} />
                </a>
                <Box sx={{ display: isMobile?"none":'flex', gap:isMobile?"15px": "50px", paddingTop: "5%" }}>
                  <Typography variant="h5" onClick={() => handleDescriptionClick(item)}>Descripción</Typography>

                  <a href={item.github}>     <Typography variant="h5"  >Código</Typography></a>
                </Box>

              </Box> */}
              
<Grid container spacing={0} sx={{borderRadius:"5%",height:isMobile?"none":"35vh",display:isMobile?"flex":'flex',border:"0px solid white",background:isMobile?"none":"linear-gradient(#512E5F  ,#212F3C  , #512E5F    )"  }}>
  <Grid item xs={12} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
 <Box  sx={{marginLeft:isMobile?"-50%":"0%",transition: 'transform 0.3s', transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)'}}  >  
  <a href={item.url} target="_blank" rel="noopener noreferrer">
  <img src={item.img} style={{ width: isMobile ? "150%" : "100%", borderRadius: "5%", opacity: hoveredIndex === index ? 0.5 : 1 }} alt={item.title} />
                </a>
                {hoveredIndex === index && (
                  <Typography variant={isMobile?"h7":"body1"} sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '5px', borderRadius: '5px', textAlign: 'center' }}>
                    {item.title}
                  </Typography>
                )}
                 </Box>
  </Grid>
   
  <Grid item xs={6} sx={{display:isMobile?"none":'flex',justifyContent:"center"}}>
  <Typography sx={{textAlign:"center"}} variant="h5" onClick={() => handleDescriptionClick(item)}>Descripción</Typography>
  </Grid>
  <Grid item xs={6} sx={{display:isMobile?"none":'flex',justifyContent:"center"}}>
  <a href={item.github}>     <Typography   variant="h5"  >Código</Typography></a>
  </Grid> 
</Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)', width: "75%", height: "75%",
            backgroundImage:   'linear-gradient(#4A235A, #212F3C ,#4A235A )' , border: '0px solid #000',
            boxShadow: 24,
            borderColor:"#4A235A"
          }}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, height: 200, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}> */}

            <Typography variant="h2" color="white" component="h2">
              {selectedItem?.title}
            </Typography>
            <img src={selectedItem?.img} width="75%"  style={{borderRadius:"5%"}} alt={selectedItem?.title} />
            <Typography variant="body" color="white" padding={1} >
              {selectedItem?.description}
            </Typography></Box>
        </Box>
      </Modal>



    </Box>
  );
}

export default Portfolio