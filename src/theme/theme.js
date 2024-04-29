import { createTheme } from '@mui/material/styles';
import "../fonts/Oswald-VariableFont_wght.ttf"
import "../fonts/Jacquard24-Regular.ttf"

const theme=createTheme({

    typography:{
        fontFamily:["Oswald","Roboto","Jacquard24","sans-serif"].join(","),
        fontSize:12,color:"white",
        // name:{
        //     fontFamily: "Jacquard24", "sans-serif",
        //     fontSize:24,fontWeight:400
        // },
        // h1:{
        //     fontFamily:["Jacquard24","system-u"].join(","),
        // fontSize:40,fontWeight:700
        // },
        h1:{
            fontFamily:["Oswald","Roboto","sans-serif"].join(","),
        fontSize:40,fontWeight:700,color:"white"
        },
        h2:{
            fontFamily:["Oswald","Roboto","sans-serif"].join(","),
        fontSize:32,fontWeight:600,color:"white",
        },
        h3:{
            fontFamily:["Oswald","Roboto","sans-serif"].join(","),
        fontSize:24,fontWeight:500,color:"white",
        },
        h4:{
            fontFamily:["Oswald","Roboto","sans-serif"].join(","),
        fontSize:20,fontWeight:400,color:"white",
        },
        h5:{
            fontFamily:["Oswald","Roboto","sans-serif"].join(","),
        fontSize:16,color:"white",
         },
        h6:{
            fontFamily:["Oswald","Roboto","sans-serif"].join(","),
        fontSize:12,color:"white",
        },
    },
    palette:{
        primary:{
            main:"#00D5FA",
        },
        secondary:{
            main:"#006B7D",
        },
        text:{
            primary:"#666666",
            secondary:"#FFFFFF"
        },
        background:{
            primary:"",
            secondary:"linear-gradient(95.88deg, #70C0B2 0%, #0198B6 29.4%, #007289 81.74%)"
        },
    }

})
export default theme