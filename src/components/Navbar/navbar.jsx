// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import { NavLink } from 'react-router-dom';

// const drawerWidth = 240;

// const pages = ['Home', 'Sobre Mi', 'Portfolio','Experiencia','Contacto'];
 
// function DrawerAppBar(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const [anchorElNav, setAnchorElNav] = React.useState(null);
 
//   // const handleOpenNavMenu = (event) => {
//   //   setAnchorElNav(event.currentTarget);
//   // };
 

//   // const handleCloseNavMenu = () => {
//   //   setAnchorElNav(null);
//   // };
 
//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         MUI
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: 'center' }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );
//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//            <Typography
//             variant="h6"
//             Wrap
//             component="a"
//              sx={{
//               mr: 2,
//                fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             Franco Martín Sassi
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
          
           
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//           {pages.map((page) => {
//     let redirectTo = page === 'Sobre Mi' ? '/sobre' : `/${page.toLowerCase().replace(/\s/g, '-')}`;
//     if (page === 'Home') redirectTo = '/';

//     return (
//       <NavLink to={redirectTo} key={page}>  
//         <Button
//           key={page}
//           onClick={handleCloseNavMenu}
//           sx={{ my: 2, color: 'white', display: 'block' }}
//         >
//           {page}
//         </Button>
//       </NavLink>
//     );
//   })}
//           </Box>

          
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default DrawerAppBar;

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
//  import { NavLink } from 'react-router-dom';

// const drawerWidth = 240;
// // const navItems = ['Home', 'About', 'Contact'];
// const navItems = ['Home', 'Sobre Mi', 'Portfolio','Experiencia','Contacto'];
// function DrawerAppBar(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
 

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };
//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         MUI
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: 'center' }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar component="nav">
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             Franco Sassi
//           </Typography>
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             {/* {navItems.map((item) => (
              
//               <Button key={item} sx={{ color: '#fff' }}>
//                 {item}
//               </Button>
//             ))} */}
//             {navItems.map((page) => {
//     let redirectTo = page === 'Sobre Mi' ? '/#sobre' : `/#${page.toLowerCase().replace(/\s/g, '-')}`;
//     if (page === 'Home') redirectTo = '/';

//     return (
//       <NavLink to={redirectTo} key={page}>  
//       <Button
//           key={page}
//           onClick={handleCloseNavMenu}
//           sx={{ my: 2, color: 'white'  }}
//         >
//           {page}
//         </Button>  
        
//       </NavLink>
//     );
//   })}
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//       {/* <Box component="main" sx={{ p: 3 }}>
//         <Toolbar />
         
//       </Box> */}
//     </Box>
//   );
// }

// DrawerAppBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default DrawerAppBar;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useContext } from "react"
import { DarkModeContext } from "../../contexts/DarkModeContext"
 function DrawerAppBar({toggleDarkMode}) {
  const handleClickScroll = (id) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado de los enlaces

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const isDark=  useContext(DarkModeContext)

  return (
    <div className={isDark ? "dark" : "light"}> 
    <AppBar position="fixed" sx={{backgroundColor:'#4A235A', boxShadow: 'none'}}>
      <Toolbar>
        <Typography variant="h1" sx={{ flexGrow: 1 }}>
         Franco Sassi
        </Typography>
        <Box sx={{display:"flex" ,gap:3}}>
          {/* Usar handleClickScroll para hacer scroll hacia la sección correspondiente */}
          <a href="#home" onClick={(e) => handleClickScroll('home', e)} style={{ textDecoration: 'none', color: 'inherit' }}><Typography variant="h4">Home</Typography> </a>
          <a href="#sobre" onClick={(e) => handleClickScroll('sobre', e)}style={{ textDecoration: 'none', color: 'inherit' }}><Typography variant="h4">Sobre Mi</Typography> </a>
          <a href="#portfolio" onClick={(e) => handleClickScroll('portfolio', e)}style={{ textDecoration: 'none', color: 'inherit' }}><Typography variant="h4">Portfolio</Typography></a>
          <a href="#experiencia" onClick={(e) => handleClickScroll('experiencia', e)}style={{ textDecoration: 'none', color: 'inherit' }}><Typography variant="h4">Tecnologías</Typography></a>
          <a href="#contacto" onClick={(e) => handleClickScroll('contacto', e)}style={{ textDecoration: 'none', color: 'inherit' }}><Typography variant="h4">Contacto</Typography></a>
          {/* <button onClick={toggleDarkMode}>
       {isDark ? <BsFillSunFill/>:<BsFillMoonFill/>} Toogle
       </button> */}
        </Box>
      </Toolbar>
    </AppBar></div>
  );
}

export default DrawerAppBar;
