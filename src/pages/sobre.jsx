// Sobre.jsx
import React from 'react';
import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import fotoTechX from "../assets/fotoTechX.jpg";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Sobre = ({isDarkMode}) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { t } = useTranslation(); // Hook de traducción
  const isExtraLarge = useMediaQuery("(min-width:1440px)"); // Nueva media query para xl
  const imageWidth = isExtraLarge ? 350 : 275;

  return (
    <Box
      sx={{
        paddingRight: isMobile ? "0%" : "10%",
        textAlign: "center",
        paddingLeft: isMobile ? "0%" : "10%",
        width: "100%",
        display: "flex",
        paddingBottom: "150px",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: "0%",
      }}
    >
      <Typography
        variant="h2"
        fontWeight="bold"
        fontStyle="italic"
        sx={{ textAlign: "center",  paddingBottom: "1%" }}
      >
        {t('sobre.title')} {/* Título traducido */}
      </Typography>
      <Divider 
        sx={{
          width: "230px",           // Ancho del 50% del contenedor
          margin: "0 auto",       // Centrar horizontalmente
          borderColor: isDarkMode ? "#ffffff" : "#000000", // Cambia el color dependiendo del modo
          borderWidth: "1px",     // Grosor del Divider
          marginBottom: isMobile?"4%":"2%",     // Espacio debajo del Divider
        }} 
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            marginBottom: isMobile ? "25px" : "0px",
          }}
        >
          <img
            src={fotoTechX}
            alt=""
            width={imageWidth}       
                 style={{
              borderRadius: "8px",
              boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.4), 0px 3px 6px rgba(0, 0, 0, 0.2)",
              lineHeight: "1.5", // Ajustar la altura de la imagen según el texto

            }}
          />
        </Box>
        <Box
          sx={{
            width: "50%",
            gap: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: isMobile ? "center" : "justify",
          }}
        >
          <Typography variant="body1" sx={{ paddingBottom: "10px"}}>
            <span dangerouslySetInnerHTML={{ __html: t('sobre.introduction') }} /> {/* Texto de introducción traducido */}
          </Typography>
          <Typography variant="body1" sx={{  paddingBottom: "10px" }}>
            {t('sobre.experience')} {/* Experiencia traducida */}
          </Typography>
          <Typography variant="body1" sx={{ paddingBottom: "10px" }}></Typography>
          <Box sx={{ width: "100%" }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              fontStyle="italic"
              sx={{ textDecoration: "underline", color: "#03a9f4" }}
            >
              {t('sobre.achievementsTitle')} {/* Título de logros traducido */}
            </Typography>
            <Typography
              variant="body1"
              component="li"
              sx={{
                color: "#03a9f4",
                fontWeight: "bold",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              {t('sobre.achievement1')} {/* Logro 1 traducido */}
            </Typography>
            <Typography
              variant="body1"
              component="li"
              sx={{
                color: "#03a9f4",
                fontWeight: "bold",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              {t('sobre.achievement2')} {/* Logro 2 traducido */}
            </Typography>
            <Typography
              variant="body1"
              component="li"
              sx={{
                color: "#03a9f4",
                fontWeight: "bold",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              {t('sobre.achievement3')} {/* Logro 3 traducido */}
            </Typography>
            <Typography
              variant="body1"
              component="li"
              sx={{
                color: "#03a9f4",
                fontWeight: "bold",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              {t('sobre.achievement4')} {/* Logro 4 traducido */}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sobre;
