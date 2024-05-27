import { createTheme } from '@mui/material/styles';
 
 const theme=createTheme({

    typography:{
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize:12,color:"white",
       
        h1:{
          color:"white", 
        },
        h2:{
         color:"white",
        },
        h3:{
           color:"white", 
        },
        h4:{
          color:"white",
        },
        h5:{
          color:"white" 
         },
        h6:{
          color:"white", 
        },
        body:{
 fontSize:"14px",
          color:"white" ,
          '@media (min-width:1600px)': {
            fontSize: '1.2rem',
          },
         
        },
        body2:{
 fontSize:"12px",
            color:"white" ,
            '@media (min-width:1600px)': {
              fontSize: '0.8rem',
            },
            
          },
    },
    

})
export default theme