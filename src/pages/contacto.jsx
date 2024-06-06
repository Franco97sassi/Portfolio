import {
  Box,
  Button,
  CssBaseline,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contacto = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  // const showError = (fieldName) => {
  //   return submitAttempted && formValues[fieldName] === "";
  // };
  const CustomAlert = ({ message, severity }) => {
    return (
      <div
        style={{
          padding: "10px",
          backgroundColor: getBackgroundColor(severity),
          color: "white",
          borderRadius: "5px",
        }}
      >
        <Typography variant="body"> {message} </Typography>
      </div>
    );
  };

  const getBackgroundColor = (severity) => {
    switch (severity) {
      case "success":
        return "#4caf50";
      case "error":
        return "#f44336";
      case "warning":
        return "#ff9800";
      default:
        return "#2196f3";
    }
  };
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

    if (areAllFieldsCompleted&& isEmailValid()) {
      // Envío del formulario si todos los campos están completos
      emailjs
        .sendForm(
          "service_vyuj2da",
          "template_8d29int",
          form.current,
          "MFjL6HylWjhExu_0n"
        )
        .then((result) => {
          console.log(result.text);
          // Mostrar mensaje de éxito
          setShowSuccessAlert(true);
          setTimeout(() => {
            window.location.reload();
          }, 1000); // Recarga la página después de 5 segundos
        })
        .catch((error) => {
          console.log(error.text);
          // Mostrar mensaje de error
          alert(
            "An error occurred while sending the message. Please try again later."
          );
        });
    } else {
      // Si no todos los campos están completos, mostrar un mensaje de error
      setShowErrorAlert(true);
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 3000);
    }
  };
  const isEmailValid = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(formValues.email);
  };
  return (
    <div>
      <Box
        component="form"
        sx={{
           justifyContent: isMobile ? "center" : "center",
          alignContent: "center",
          paddingTop:isMobile ?"25px":"5px",
           
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: isMobile ? "center" : "center",
            marginBottom:"-50px",
            
           }}
        >
          <Typography
            variant="h2" fontWeight="bold"
            sx={{ textAlign: isMobile ? "center" : "center" }}
          >
            Contact
          </Typography>

          <Typography
            variant="h5"
            sx={{ textAlign: isMobile ? "center" : "center",paddingLeft:10,paddingRight:10   }}
          >
            To get in touch with me, please complete this form.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            noValidate
            autoComplete="off"
            ref={form}
            onSubmit={handleSubmit}
            
          >
            <Stack
              spacing={2}
              sx={{
                paddingTop: "50%",
                paddingBottom: "1%",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: isMobile ? "80%" : "100%", // Ajusta el ancho máximo del contenedor principal
                margin: "0 auto", // Centra el contenedor principal horizontalment
              }}
            >
              {/* <TextField   label="Nombre"  /> */}
              <TextField
                //  error={showError("nombre")}
                 name="name"
                value={formValues.name}
                onChange={handleChange}
                minRows={1}
                placeholder="Name"
                variant="outlined"
                multiline
                InputProps={{
                  onFocus: (event) => event.target.parentElement.parentElement.querySelector('label').style.display = 'none', // Oculta el label cuando el TextField está enfocado
                }}
                sx={{
                  width: isMobile ? "200%" : "500%",
                  maxWidth: "400px",
                  "& .MuiInputBase-input": {
                    color: "white", // Establece el color del texto en negro
                    borderColor:"white"
                  },
                  '& .MuiInputLabel-root': {
                    display: 'none', // Oculta completamente el label
                  },
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'transparent', // Establece el fondo del TextField como transparente
                    borderRadius: '10px', // Establece el borde redondeado de 5px
                    borderColor: 'white', // Establece el color del borde
              
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white', // Cambia el color del borde cuando el TextField está en hover
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white', // Mantén el color del borde inalterado cuando está enfocado
                    },
                  },
                }}
                error={submitAttempted && formValues.name.trim() === ""}
              />
              <TextField
  name="email"
  value={formValues.email}
  onChange={handleChange}
  minRows={1}
  placeholder="Email"
  variant="outlined"
  multiline
  InputProps={{
    onFocus: (event) => event.target.parentElement.parentElement.querySelector('label').style.display = 'none', // Oculta el label cuando el TextField está enfocado
  }}
  sx={{
    width: isMobile ? "200%" : "500%",
    maxWidth: "400px",
    "& .MuiInputBase-input": {
      color: "white", // Establece el color del texto en negro
      borderColor:"white"
    },
    '& .MuiInputLabel-root': {
      display: 'none', // Oculta completamente el label
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'transparent', // Establece el fondo del TextField como transparente
      borderRadius: '10px', // Establece el borde redondeado de 5px
      borderColor: 'white', // Establece el color del borde

      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white', // Cambia el color del borde cuando el TextField está en hover
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white', // Mantén el color del borde inalterado cuando está enfocado
      },
    },
  }}
  error={submitAttempted && formValues.name.trim() === ""}
/>

              <TextField
   name="message"
  value={formValues.message}
  onChange={handleChange}
  fullWidth
  minRows={7}
  placeholder="Message"
  variant="outlined"
  sx={{
    width: isMobile ? "200%" : "500%",
    maxWidth: "400px",
    "& .MuiInputBase-input": {
      color: "white", // Establece el color del texto en negro
      borderColor:"white"
    },
    '& .MuiInputLabel-root': {
      display: 'none', // Oculta completamente el label
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'transparent', // Establece el fondo del TextField como transparente
      borderRadius: '10px', // Establece el borde redondeado de 5px
      borderColor: 'white', // Establece el color del borde

      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white', // Cambia el color del borde cuando el TextField está en hover
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white', // Mantén el color del borde inalterado cuando está enfocado
      },
    },
  }}
  multiline
  InputLabelProps={{
    shrink: true, // El label se encogerá cuando el TextField tenga contenido
  }}
  InputProps={{
    onFocus: (event) => event.target.parentElement.parentElement.querySelector('label').style.display = 'none', // Oculta el label cuando el TextField está enfocado
  }}
  error={submitAttempted && formValues.name.trim() === ""}
/>


            </Stack>{" "}
          </Box>
          <Button
            sx={{
              marginTop: "1%",
              marginBottom: "1%",
              background: "linear-gradient(#17202A,#1B4F72  )",
              color: "white",
            }}
            variant="contained"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          {/* Muestra el alerta de éxito si showSuccessAlert es true */}
          {showSuccessAlert && (
            <CustomAlert
              message="Message sent successfully"
              severity="success"
            />
          )}
          {/* Muestra el alerta de error si showErrorAlert es true */}
          {showErrorAlert && (
            <CustomAlert
              message="An error occurred while sending the message. Please try again later."
              severity="error"
            />
          )}
        </Box>
      </Box>
    </div>
  );
};

export default Contacto;
