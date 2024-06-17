import { createTheme } from '@mui/material/styles';

const baseTheme = {
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    fontSize: 12,
    // h1: {
    //   fontSize: "2rem",
    // },
    // h2: {
    //   fontSize: "1.75rem",
    // },
    // h3: {
    //   fontSize: "1.5rem",
    // },
    // h4: {
    //   fontSize: "1.25rem",
    // },
    // h5: {
    //   fontSize: "1rem",
    // },
    // h6: {
    //   fontSize: "0.875rem",
    // },
    body1: {
      fontSize: "14px",
      '@media (min-width:1600px)': {
        fontSize: '1.2rem',
      },
    },
    body2: {
      fontSize: "12px",
      '@media (min-width:1600px)': {
        fontSize: '0.8rem',
      },
    },
  },
};

const lightThemeConfig = {
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
      paper: '#f4f4f4',
    },
    text: {
      primary: '#000000',
      secondary: '#616161',
    },
  },
};

const darkThemeConfig = {
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1d1d1d',
    },
    text: {
      primary: '#ffffff',
      secondary: '#bdbdbd',
    },
  },
};

const createCustomTheme = (isDarkMode) => {
  return createTheme({
    ...baseTheme,
    ... (isDarkMode ? darkThemeConfig : lightThemeConfig)
  });
};

export default createCustomTheme;
