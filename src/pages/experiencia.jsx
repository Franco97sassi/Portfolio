import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import js from "../assets/js.png";
import node from "../assets/node.png";
import rct from "../assets/rct.png";
import sass from "../assets/sass.png";
import mongo from "../assets/mongoDB.png";
import firebase from "../assets/firebase.png";
import tailwind from "../assets/tailwindIcon.png";
import django from "../assets/django.png";
import MYSQL from "../assets/MYSQL.png";

import { useState } from "react";
import bootstrap from "../assets/bootstrap.png";
const Experiencia = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const itemData = [
    { img: html, title: "Html" },
    { img: css, title: "Css" },
    { img: github, title: "Github" },
    { img: js, title: "Js" },
    { img: rct, title: "React" },
    { img: bootstrap, title: "Bootstrap" },
    { img: node, title: "Node Js" },
    { img: sass, title: "SASS" },
    { img: firebase, title: "Firebase" },
    { img: tailwind, title: "Tailwind" },
    { img: django, title: "Django" },

    { img: mongo, title: "MongoDB" },
    { img: MYSQL, title: "MYSQL" },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      <Box
        sx={{
          height: isMobile ? "150vh" : "100vh",
          alignContent: "center",
          marginBottom: isMobile ? "50%" : "0%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: isMobile ? "00%" : "0%",
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{ textAlign: isMobile ? "center" : "center" }}
          >
            Tecnologías
          </Typography>

           
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
             justifyContent: "center",
            alignItems: "center",
            flexWrap:"wrap",
            gap:"100px"
          }}
        >
          {/* <Grid
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
            container
            rowSpacing={3}
            padding={5}
            columnSpacing={{ xs: 1, sm: 2, md: 1 }}
          > */}
          {itemData.map((item, index) => (
            // <Grid
            //   key={index}
            //   item
            //   xs={4}
            //   onMouseEnter={() => setHoveredIndex(index)}
            //   onMouseLeave={() => setHoveredIndex(null)}
            // >
            <>
              <Box
                sx={{
                  p: 1,
                  // display: "flex",
                  // flexDirection: "row",
                  // justifyContent: "center",
                  // alignItems: "center",
                  transition: "transform 0.3s",
                  transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                }}
              >
                <img
                  src={item.img}
                  style={{
                    width: isMobile ? "50px" : "100px",
                    maxWidth: "150px",
                  }}
                  alt={item.title}
                />
              </Box> 
            </>
            // </Grid>
          ))}
          {/* </Grid> */}
        </Box>
      </Box>{" "}
    </div>
  );
};

export default Experiencia;
