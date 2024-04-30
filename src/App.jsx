import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Navbar from './components/Navbar/navbar'
import Home from './pages/home'
import {Route,Routes} from "react-router-dom"
import Sobre from './pages/sobre'
import Portfolio from './pages/portfolio'
import Experiencia from './pages/experiencia'
import Contacto from './pages/contacto'
import General from './pages/general'
import { DarkModeContext } from './contexts/DarkModeContext'
import { ThemeProvider } from '@mui/material'
import theme from './theme/theme'
// import { LanguageProvider } from './contexts/languageContext'

function App() {
  const [isDark, setisDark] = useState(false)
  const toggleDarkMode = () => {
    setisDark(!isDark);}
  return (
    <>
    {/* <LanguageProvider>   */}
             <DarkModeContext.Provider value={isDark}>    
<ThemeProvider theme={theme}>  
             <Navbar toggleDarkMode={toggleDarkMode} />
 <Routes>
  {/* <Route path="/" element={<Home/>}></Route>
  <Route path="/sobre" element={<Sobre/>}></Route>
  <Route path="/portfolio" element={<Portfolio/>}></Route>
  <Route path="/experiencia" element={<Experiencia/>}></Route>
  <Route path="/contacto" element={<Contacto/>}></Route> */}
          

   <Route path="/" element={<General/>}></Route>
    
    </Routes>
    </ThemeProvider>
    </DarkModeContext.Provider> 
    {/* </LanguageProvider> */}
    </>
  )
}

export default App