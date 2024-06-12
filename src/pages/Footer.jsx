import { Box, Typography } from '@mui/material'
import { useTranslation } from "react-i18next"; // Asegúrate de importar esto

const Footer = () => {
  const { t } = useTranslation(); // Esto te da acceso a las traducciones

  return (
    <Box sx={{marginTop:"100px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"transparent",height:"10vh"}}>
      <Typography variant='body'>
      {t('footer.text')}

        {/* © 2024 Franco Sassi. All rights reserved.  */}
        </Typography>   
    </Box>
  )
}

export default Footer