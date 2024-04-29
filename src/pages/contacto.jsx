 import { Box, Button, CssBaseline, Stack, TextField, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import emailjs from 'emailjs-com'; 

const Contacto = () => {
  const isMobile=useMediaQuery('(max-width:600px)')

  // const showError = (fieldName) => {
  //   return submitAttempted && formValues[fieldName] === "";
  // };
  const form = React.useRef(); // Ref para el formulario

  const [formValues, setFormValues] = React.useState({
     name: "",
    email: "",
    message: "",
    
  });
  const [submitAttempted, setSubmitAttempted] = React.useState(false);

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
 };
 const areAllFieldsCompleted = Object.values(formValues).every(
  (value) => value.trim() !== ""
);
 const handleSubmit = (event) => {
  event.preventDefault();
  setSubmitAttempted(true);

  if (areAllFieldsCompleted) {
      // Crear una instancia de FormData con el formulario actual
      const formData = new FormData(form.current);

      // Utilizar FormData para inspeccionar los valores
      for (let [key, value] of formData.entries()) {
          console.log(key, value);
      }

      emailjs.sendForm('service_vyuj2da', 'template_8d29int', form.current, 'MFjL6HylWjhExu_0n')
          .then((result) => {
              console.log(result.text);
              // navigate("/asesoriaSep");
          }, (error) => {
              console.log(error.text);
          });
  }
};
  return (
    <div>  
    <Box sx={{ height:"100vh", justifyContent:isMobile?"center":"flex-start",alignContent:"center"}}> 
          <CssBaseline />
<Box sx={{display:"flex",flexDirection:"column",paddingLeft:isMobile?"0%":"10%"}}>  
 
    <Typography  variant="h2" sx={{   textAlign:isMobile?"center":"left" }} >Contacto</Typography>
    
    <Typography variant="h5"  sx={{   textAlign:isMobile?"center":"left" }}>Para comunicarte conmigo, completa este formulario.</Typography>
    </Box>
    <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center" }}>

    <Box component="form" noValidate autoComplete="off"ref={form} onSubmit={handleSubmit}>  
   <Stack spacing={2} sx={{paddingTop:"50%",paddingBottom:"1%",justifyContent:"center",alignItems:"center" }}>
    
{/* <TextField   label="Nombre"  /> */}
   <TextField
                    //  error={showError("nombre")}
                    label="Nombre"
                    name="name"
                      value={formValues.name}
                      onChange={handleChange}
                     
                    minRows={1}
                    placeholder="Nombre"
                    variant="outlined"
                     
                    multiline
                    sx={{ width: isMobile?'200%':'500%', maxWidth: '400px' ,
                    '& .MuiInputBase-input': {
                      color: 'white', // Establece el color del texto en blanco
                    },}} // Establece el ancho máximo deseado

                  />    
<TextField    label="Email"
   name="email"
 value={formValues.email}
 onChange={handleChange}
 
minRows={1}
placeholder="Email"
variant="outlined"
// InputProps={{
//   // disableUnderline: true,
//   className: classes.customTextField,
// }}
multiline                    sx={{ width: isMobile?'200%':'500%', maxWidth: '400px',
'& .MuiInputBase-input': {
  color: 'white', // Establece el color del texto en blanco
}, }} // Establece el ancho máximo deseado

/>
<TextField   label="Mensaje"
  name="message"
 value={formValues.message}
 onChange={handleChange}
fullWidth
minRows={7}
placeholder="Mensaje"
variant="outlined"
// InputProps={{
//   // disableUnderline: true,
//   className: classes.customTextField,
// }}
sx={{ width: isMobile?'200%':'500%', maxWidth: '400px' ,

'& .MuiInputBase-input': {
  color: 'white', // Establece el color del texto en blanco
},
}} // Establece el ancho máximo deseado

multiline
/>
</Stack>  </Box>
<Button  sx={{marginTop:"1%" ,background: "linear-gradient(#17202A,#1B4F72  )",color:"white"}}  variant="contained"  onClick={handleSubmit}>Enviar</Button>
 
</Box>
 
    </Box></div>
  )
}

export default Contacto