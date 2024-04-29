// import { Box, Button, CssBaseline, Stack, TextField, Typography } from '@mui/material'
// import React from 'react'
 
// const Form = () => {
//   return (
//     <div>  
//     <Box sx={{ height:"100vh",alignContent:"center"}}> 
//           <CssBaseline />
// <Box sx={{display:"flex",flexDirection:"column",paddingLeft:"10%"}}>  
 
//     <Typography  variant="h2" sx={{  color:"white",textAlign:"left" }} >Contacto</Typography>
    
//     <Typography sx={{ fontFamily: 'Oswald, sans-serif',color:"white" }}>Para comunicarte conmigo, completa este formulario.</Typography>
//     </Box>
//     <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center" }}>

    
//    <Stack spacing={2} sx={{paddingBottom:"1%"}}>
// <TextField   label="Nombre"  />
// <TextField    label="Email"/>
// <TextField   label="Mensaje"/>
// </Stack>  
// <Button  variant="contained">Enviar</Button>
//  </Box>
 
//     </Box></div>
//   )
// }

// export default Form



import React from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, Typography, FormControl } from "@mui/material";
import "./Form.css"
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

const SERVICE_KEY = import.meta.env.VITE_API_SERVICE
const TEMPLATE_KEY = import.meta.env.VITE_API_TEMPLATE
const PUBLIC_KEY = import.meta.env.VITE_API_PUBLIC_KEY


const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  company: Yup.string().required("Company is required"),
  //help: Yup.string().required("How can we help you? is required"),
});

const initialValues = {
  name: "",
  email: "",
  company: "",
  help: "",
  //recaptchaToken:""
};

  const Form = ({handleButtonClick}) => {
  

  const is900 = useMediaQuery('(max-width:899px)');
  const is600 = useMediaQuery('(max-width:600px)');
  const formik = useFormik({
    initialValues,
    validationSchema,
    
    onSubmit: (values) => {
      // Aquí puedes manejar la lógica de envío del formulario
      console.log(values);
      handleButtonClick()
      emailjs.send(SERVICE_KEY,TEMPLATE_KEY,{
        reply_to: "facoogle1@gmail.com",
        company: values.company,
        help: values.help,
        email_company:values.email,
        email: "hello@boosttalent.io",
        from_name: values.name,
        }, PUBLIC_KEY);
    },
  });

  const buttonStyles = {
    background: "linear-gradient(95.88deg, rgba(112, 192, 178, 1) 0%, rgba(1, 152, 182, 1) 29.399871826171875%, rgba(0, 114, 137, 1) 81.73930644989014%)",
    borderRadius: "999px",
    padding: "16px 32px",
    display: "flex",
    flexDirection: "row",
    gap: "12px",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "223px",
    width: "100%",
    position: "relative",
    boxShadow: "0px 5px 15px 0px rgba(37, 44, 97, 0.15), 0px 2px 4px 0px rgba(136, 144, 194, 0.2)",
    overflow: "hidden",
    height: "48px",
    fontSize: "16px",
  };

  const textStyles = {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "16px",
    fontFamily: "Montserrat, sans-serif",
    position: "relative",
    textTransform: "none"
  };

  return (
    <form onSubmit={formik.handleSubmit} style={{ maxWidth: is600 ? "500px" : "348px", width: "100%", paddingBottom:is600?"80px":"0px" }}>
      <Box sx={{  }}>
        <Box sx={{ marginBottom: "24px" }}>
          <Typography sx={{ fontSize: "16px", fontWeight: "400", lineHeight: "24px" }}>
            Name*
          </Typography>
          <Box sx={{ borderRadius: "100px", background: "linear-gradient(to right, #70C0B2, #0198B6, #007289)", padding: "2px" }}>
            <TextField
            sx={{ "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input, & .css-1x5jdmq": {
              background:"transparent",
              height:"10px",
            }}}
              fullWidth
              autoComplete="off"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
             // helperText={formik.touched.name && formik.errors.name}
              InputProps={{ style: { borderRadius: "100px", background: "#202020", height: "43px"  } }}
            />
          </Box>
          {formik.touched.name && formik.errors.name && (
            <Typography sx={{position:"absolute", color: "red", fontSize: "14px" }}>
              {formik.errors.name}
            </Typography>
          )}
        </Box>

        <Box sx={{ marginBottom: "24px" }}>
          <Typography sx={{ fontSize: "16px", fontWeight: "400", lineHeight: "24px" }}>
            Email*
          </Typography>
          <Box sx={{ borderRadius: "100px", background: "linear-gradient(to right, #70C0B2, #0198B6, #007289)", padding: "2px" }}>
            <TextField
            sx={{ "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input, & .css-1x5jdmq": {
              background:"transparent",
              height:"10px",
            }}}
              fullWidth
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              //helperText={formik.touched.email && formik.errors.email}
              InputProps={{ style: { borderRadius: "100px", background: "#202020", height: "43px"  },className: "custom-input", }}
              autoComplete="off"
            />
          </Box>
          {formik.touched.email && formik.errors.email && (
            <Typography sx={{position:"absolute", color: "red", fontSize: "14px" }}>
              {formik.errors.email}
            </Typography>
          )}
        </Box>

        <Box sx={{ marginBottom: "24px" }}>
          <Typography sx={{ fontSize: "16px", fontWeight: "400", lineHeight: "24px" }}>
            Company Name*
          </Typography>
          <Box sx={{ borderRadius: "100px", background: "linear-gradient(to right, #70C0B2, #0198B6, #007289)", padding: "2px" }}>
            <TextField
            sx={{ "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input, & .css-1x5jdmq": {
              background:"transparent",
              height:"10px",
            }}}
              fullWidth
              id="company"
              name="company"
              value={formik.values.company}
              onChange={formik.handleChange}
              //error={formik.touched.company && Boolean(formik.errors.company)}
              //helperText={formik.touched.company && formik.errors.company}
              InputProps={{ style: { borderRadius: "100px", background: "#202020", height: "43px"  } }}
              
            />
          </Box>
          {formik.touched.company && formik.errors.company && (
            <Typography sx={{position:"absolute", color: "red", fontSize: "14px" }}>
              {formik.errors.company}
            </Typography>
          )}
        </Box>

        
        <Box sx={{ marginBottom: "56px" }}>
          <Typography sx={{ fontSize: "16px", fontWeight: "400", lineHeight: "24px" }}>
            How can we help you?
          </Typography>
          <Box sx={{ borderRadius: "30px", background: "linear-gradient(to right, #70C0B2, #0198B6, #007289)", padding: "2px" }}>
            
            <TextField
            sx={{ "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input , & .css-1x5jdmq": {
              background:"transparent",
              height:"100%",
              
              
              width:"100%"
            }}}
              
              multiline="true"
              fullWidth
              id="help"
              name="help"
              value={formik.values.help}
              onChange={formik.handleChange}
              error={formik.touched.help && Boolean(formik.errors.help)}
              //helperText={formik.touched.help && formik.errors.help}
              InputProps={{ style: { borderRadius: "30px", background: "#202020", minHeight: "84px"  } }}
              
            />
          </Box>
          {/* <ReCAPTCHA sitekey="6LfXoOUmAAAAACprdTNWGrAAAkgkLpwjL6huXAzl" onChange={formik.handleChange("recaptchaToken")} /> */}
          {formik.touched.help && formik.errors.help && (
            <Typography sx={{position:"absolute", color: "red", fontSize: "14px" }}>
              {formik.errors.help}
            </Typography>
          )}
        </Box>

        <Box sx={{ display: "flex", justifyContent: is900 ? "center" : "" }}>
        
          <Button type="submit" sx={buttonStyles} variant="contained">
            <div style={textStyles}>Boost your team</div>
          </Button>
          
        </Box>
      </Box>
    </form>
  );
};
export default Form
