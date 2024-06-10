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

const drawerWidth = 240;
const navItems = ["Home", "Profile", "Portfolio", "Technologies", "Contact"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

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
  const logoStyle = {
    fontWeight: "bold",
    color: "#0091ea",
    textDecoration: "none",
    fontStyle: "italic",
  };
  const drawer = (
    <Box
      sx={{
        maxWidth: "100%",        maxHeight: "100%",

        textAlign: "center",
        backgroundColor: "#18171c",
        display:"flex",flexDirection:"column",
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
      <List  >
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => scrollToSection(item.toLowerCase())}
            >
              <ListItemText primary={item} sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        style={{ backgroundColor: "#212121", boxShadow: "none" }}
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
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link onClick={handleClick} style={logoStyle}>
              FS
            </Link>
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((page) => {
              return (
                <Button
                  key={page}
                  onClick={() => scrollToSection(page.toLowerCase())}
                  // Hace scroll a la sección correspondiente
                  sx={{ my: 2, color: "white" }}
                >
                  <Typography variant="h6">{page} </Typography>
                </Button>
              );
            })}
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
              backgroundColor: "#18171c",
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
