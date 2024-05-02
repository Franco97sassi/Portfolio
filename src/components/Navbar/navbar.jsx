import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation para manejar traducciones

  const drawerWidth = 240;
const navItems = ['Inicio', 'Perfil', 'Portfolio', 'Tecnologías', 'Contacto'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [language, setLanguage] = React.useState('es'); // Estado para almacenar el idioma actual

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
 

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    console.log(id);
  };
  

  const drawer = (
    <Box  sx={{ textAlign: 'center',backgroundImage:'linear-gradient(#4A235A, #4A235A ,#4A235A )'}}>
      <Typography variant="h6" sx={{ my: 2 }}>
        FMS
      </Typography>
      <Divider />
      <List >
        {navItems.map((item) => (
           <ListItem  key={item} disablePadding>
            <ListItemButton  sx={{ textAlign: 'center' }} onClick={() => scrollToSection(item.toLowerCase())}>
              <ListItemText primary={item} sx={{color:"white"}}  />
            </ListItemButton>
          </ListItem> 
        ))}
      </List>
    </Box>
  );
  const toggleLanguage = () => {
    const newLanguage = language === 'es' ? 'en' : 'es';
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage); // Agrega esta línea para cambiar el idioma con i18n
  };

  const { i18n } = useTranslation(); // Obtén el objeto i18n del hook useTranslation

  // Cambia el idioma utilizando i18n.changeLanguage()
  React.useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);



  const container = window !== undefined ? () => window().document.body : undefined;
 
  return (
    <Box sx={{ display: 'flex', }}>
      <CssBaseline />
      <AppBar sx={{backgroundImage:'linear-gradient(#4A235A, #4A235A ,#4A235A )'}} component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h3"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Franco Sassi
          </Typography>
          {/* <Button onClick={toggleLanguage} sx={{ my: 2, color: 'white' }}>
            {language === 'es' ? 'English' : 'Español'}
          </Button> */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
  {navItems.map((page) => {
    
       
    return (
      <Button
      key={page} 
      onClick={() => scrollToSection(page.toLowerCase())} 
      // Hace scroll a la sección correspondiente
      sx={{ my: 2, color: 'white' }}
    >
      <Typography variant="body">
        {page} </Typography>
      </Button>
       
    );
  })}
</Box>
        </Toolbar>
      </AppBar>
      <nav style={{backgroundImage:'linear-gradient(#4A235A, #4A235A ,#4A235A )',
     
    }}>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' }, 
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              height:"100vh",
              backgroundColor: '#4A235A',  // Hacer el fondo del Drawer transparente
            },
            '& .MuiDrawer-root': {
              backgroundImage: 'linear-gradient(#4A235A, #4A235A, #4A235A)', // Aplicar gradiente al contenedor principal del Drawer
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
};

export default DrawerAppBar;