import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import eng from "../../assets/eng.png";
import es from "../../assets/esp.png";

const drawerWidth = 240;
const navItems = ["home", "profile", "portfolio", "skills", "contact"];
 
function DrawerAppBar(props) {
  const { window, toggleTheme, isDarkMode } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { t, i18n } = useTranslation();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = () => {
    window.location.reload(); // Recargar la página al hacer clic
  };

  const changeLanguage = () => {
    const nextLanguage = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(nextLanguage);
  };

  const logoStyle = {
    fontWeight: "bold",
    color: "#0091ea",
    textDecoration: "none",
    fontStyle: "italic",
  };
  const languageIcons = {
    en: eng,
    es: es,
  };
  
  const currentLanguage = i18n.language;

  const getNextLanguage = () => {
    return currentLanguage   ;
  };
  const drawer = (
    <Box
      sx={{
        maxWidth: "100%",
        maxHeight: "100%",
        textAlign: "center",
        background: isDarkMode ? "#000000" : "#bdbdbd", // Fondo más claro cuando no está en modo oscuro
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Link
        onClick={handleClick}
        style={{
          ...logoStyle,
          fontSize: "30px",
        }}
      >
        FS
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => scrollToSection(item)}
            >
              <ListItemText primary={t(`navbar.${item}`)} sx={{ color: isDarkMode ? "white" : "black" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box sx={{ display: "flex",flexDirection:"column", justifyContent: "center", marginTop: 2 }}>
        <IconButton onClick={toggleTheme} color="inherit">
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon sx={{ color: isDarkMode ? "white" : "black" }} />}
        </IconButton>
        <Button onClick={changeLanguage} color="inherit">
              <img
                src={languageIcons[getNextLanguage()]}
                alt={currentLanguage === 'en' ? 'Español' : 'English'}
                style={{ width: "24px", height: "auto"  }}
              />
            </Button>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
 
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar 
        style={{ background: isDarkMode ? "#000000" : "#fafafa", boxShadow: "none" }} // Sin sombra para la barra de navegación
        component="nav"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h3"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" }, color: isDarkMode ? "white" : "black" }}
          >
            <Link onClick={handleClick} style={logoStyle}>
              FS
            </Link>
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((page) => (
              <Button
                key={page}
                onClick={() => scrollToSection(page)}
                sx={{ my: 2, color: isDarkMode ? "white" : "black" }}
              >
                <Typography variant="h6">{t(`navbar.${page}`)} </Typography>
              </Button>
            ))}
              <IconButton onClick={toggleTheme} color="inherit">
      {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon sx={{ color: isDarkMode ? "white" : "black" }} />}
    </IconButton>
            {/* <Button onClick={() => changeLanguage('en')} sx={{ color: isDarkMode ? "white" : "black" }}>EN</Button>
            <Button onClick={() => changeLanguage('es')} sx={{ color: isDarkMode ? "white" : "black" }}>ES</Button> */}
         <Button onClick={() => changeLanguage(getNextLanguage())} color="inherit">
              <img
                src={languageIcons[getNextLanguage()]}
                alt={currentLanguage === 'en' ? 'Español' : 'English'}
                style={{ width: "24px", height: "auto"  }}
              />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              height: "100vh",
              maxWidth: "100%",
              maxHeight: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              background: isDarkMode ? "#000000" : "#bdbdbd", // Fondo más claro cuando no está en modo oscuro
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
  toggleTheme: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default DrawerAppBar;
