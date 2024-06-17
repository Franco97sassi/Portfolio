import React, { useState } from "react";
import { Box, Button, Divider, Stack, TextField, Typography, useMediaQuery } from "@mui/material";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next"; // Importa el hook de traducción
 
const Contacto = ( {isDarkMode }) => {
  const { t } = useTranslation(); // Hook de traducción
  const isMobile = useMediaQuery("(max-width:763px)");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const form = React.useRef(); // Ref para el formulario

  const [formValues, setFormValues] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitAttempted, setSubmitAttempted] = React.useState(false);

  const [errorMessages, setErrorMessages] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const areAllFieldsCompleted = Object.values(formValues).every(
    (value) => value.trim() !== ""
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitAttempted(true);

    const newErrorMessages = {
      name: formValues.name.trim() === "" ? t("contacto.errorField") : "",
      email: formValues.email.trim() === "" ? t("contacto.errorField2") : "",
      message: formValues.message.trim() === "" ? t("contacto.errorField3") : "",
    };
    setErrorMessages(newErrorMessages);

    if (areAllFieldsCompleted && isEmailValid()) {
       emailjs
        .sendForm(
          "service_vyuj2da",
          "template_8d29int",
          form.current,
          "MFjL6HylWjhExu_0n"
        )
        .then((result) => {
          console.log(result.text);
           setShowSuccessAlert(true);
          setTimeout(() => {
            window.location.reload();
          }, 1000);  
        })
        .catch((error) => {
          console.log(error.text);
           alert(
            t("contacto.errorSending")
          );
        });
    } else {
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

  return (
    <div>
      <Box
        component="form"
        sx={{
          justifyContent:  "center",
          alignItems: "center",
          paddingTop: isMobile ? "25px" : "5px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            marginTop: "5px",
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
             sx={{ textAlign:"center", paddingBottom: "1%", }}
          >
            {t("contacto.title")}
          </Typography>
         
          <Typography
            variant="h5"
            sx={{
              textAlign:  "center",
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            {t("contacto.description")}
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
                paddingTop: "10%",
                paddingBottom: "1%",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: isMobile ? "80%" : "100%",  
                margin: "0 auto",  

              }}
              >
                <TextField
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  minRows={1}
                  placeholder={t("contacto.name")}
                  variant="outlined"
                  multiline
                  InputProps={{
                    onFocus: (event) =>
                      event.target.parentElement.parentElement.querySelector(
                        "label"
                      ).style.display = "none", // Oculta el label cuando el TextField está enfocado
                  }}
                  sx={{
                    width: isMobile ? "200%" : "500%",
                    maxWidth: "400px",
                    "& .MuiInputBase-input": {
                      color: isDarkMode ? "white" : "black",  // Color del texto del input
                      borderColor: isDarkMode ? "white" : "black",
                    },
                    "& .MuiInputLabel-root": {
                      color: isDarkMode ? "white" : "black",  // Color del placeholder
                      opacity: 0.6,  // Opacidad del placeholder
                    },
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "transparent",
                      borderRadius: "10px",
                      borderColor: isDarkMode ? "white" : "black",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: isDarkMode ? "white" : "black",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: isDarkMode ? "white" : "black",
                      },
                    },
                  }}
                  error={submitAttempted && formValues.name.trim() === ""}
                  helperText={submitAttempted && formValues.name.trim() === "" ? errorMessages.name : ""}
                />
                <TextField
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  minRows={1}
                  placeholder={t("contacto.email")}
                  variant="outlined"
                  multiline
                  InputProps={{
                    onFocus: (event) =>
                      event.target.parentElement.parentElement.querySelector(
                        "label"
                      ).style.display = "none",   
                  }}
                  sx={{
                    width: isMobile ? "200%" : "500%",
                    maxWidth: "400px",
                    "& .MuiInputBase-input": {
                      color: isDarkMode ? "white" : "black",  // Color del texto del input
                      borderColor: isDarkMode ? "white" : "black",
                    },
                    "& .MuiInputLabel-root": {
                      color: isDarkMode ? "white" : "black",  // Color del placeholder
                      opacity: 0.6,  // Opacidad del placeholder
                    },
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "transparent",
                      borderRadius: "10px",
                      borderColor: isDarkMode ? "white" : "black",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: isDarkMode ? "white" : "black",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: isDarkMode ? "white" : "black",
                      },
                    },
                  }}
                  error={submitAttempted && formValues.email.trim() === ""}
                  helperText={submitAttempted && formValues.email.trim() === "" ? errorMessages.email : ""}
                />
               <TextField
                name="message"
                value={formValues.message}
                onChange={handleChange}
                fullWidth
                multiline
                minRows={7}  
                placeholder={t("contacto.message")}
                variant="outlined"
                sx={{
                  width: isMobile ? "200%" : "500%",
                  maxWidth: "400px",
                  "& .MuiInputBase-input": {
                    color: isDarkMode ? "white" : "black",  // Color del texto del input
                    borderColor: isDarkMode ? "white" : "black",
                  },
                  "& .MuiInputLabel-root": {
                    color: isDarkMode ? "white" : "black",  // Color del placeholder
                    opacity: 0.6,  // Opacidad del placeholder
                  },
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "transparent",
                    borderRadius: "10px",
                    borderColor: isDarkMode ? "white" : "black",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: isDarkMode ? "white" : "black",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: isDarkMode ? "white" : "black",
                    },
                  },
                }}
                error={submitAttempted && formValues.message.trim() === ""}
                helperText={submitAttempted && formValues.message.trim() === "" ? errorMessages.message : ""}
              />
  
              </Stack>
            </Box>
            <Button
              sx={{
                marginTop: "10px",
                marginBottom: "1%",
                background: "#0091e9",
                color: "white",
                height: "40px", fontSize:"14px"
              }}
              variant="contained"
              onClick={handleSubmit}
            >
              {t("contacto.submit")}
            </Button>
            {/* Muestra el alerta de éxito si showSuccessAlert es true */}
            {showSuccessAlert && (
              <CustomAlert
                message={t("contacto.successMessage")}
                severity="success"
              />
            )}
            {/* Muestra el alerta de error si showErrorAlert es true */}
            {showErrorAlert && (
              <CustomAlert
                message={t("contacto.errorMessage")}
                severity="error"
              />
            )}
          </Box>
        </Box>
      </div>
    );
  };
  
  export default Contacto;
  