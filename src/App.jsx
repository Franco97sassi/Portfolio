import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import Navbar from './components/Navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import General from './pages/general';
import { ThemeProvider } from '@mui/material';
import Footer from './pages/Footer';
import createCustomTheme from './theme/theme';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.body.setAttribute('data-theme', newTheme ? 'dark' : 'light');
  };

  // Obtener el tema basado en isDarkMode
  const theme = createCustomTheme(isDarkMode);

  return (
    <ThemeProvider theme={theme}>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Routes>
        <Route path="/" element={<General isDarkMode={isDarkMode} />} />
      </Routes>
      {/* <Footer /> */}
    </ThemeProvider>
  );
}

export default App;
