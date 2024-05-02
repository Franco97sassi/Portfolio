import { useState } from 'react'
 
import './App.css'
import './index.css'
import Navbar from './components/Navbar/navbar'
 
import {Route,Routes} from "react-router-dom"
 
import General from './pages/general'
 
import { ThemeProvider } from '@mui/material'
import theme from './theme/theme'
import { I18nextProvider } from 'react-i18next';
import i18n from './theme/i18n'; // Archivo de configuración de i18n

function App() {
 
  return (
    <>
 <ThemeProvider theme={theme}>  
 <I18nextProvider  >

             <Navbar    />
 <Routes>
 
          

   <Route path="/" element={<General/>}></Route>
    
    </Routes>
    </I18nextProvider>

    </ThemeProvider>
     </>
  )
}

export default App