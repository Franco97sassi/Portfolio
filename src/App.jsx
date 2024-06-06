 import React from 'react';

import './App.css'
import './index.css'
import Navbar from './components/Navbar/navbar'
 
import {Route,Routes} from "react-router-dom"
 
import General from './pages/general'
 
import { ThemeProvider } from '@mui/material'
import theme from './theme/theme'
import Footer from './pages/Footer';
   
    function App() {
       
  return (
    <>
 <ThemeProvider theme={theme}>  
                 <Navbar   /> 
                <Routes> 
  <Route path="/" element={<General/>}>
    </Route>  
   </Routes>  
      </ThemeProvider>
     </>
  )
}

export default App