import React from 'react';
import { Box, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        gap: '2rem',
        backgroundColor: 'black', // Fondo oscuro
        flexWrap: 'wrap', // Para que sea responsivo
        color: 'white', // Letras blancas
      }}
    >
      {/* Columna 1: Logo */}
      <Box sx={{ flex: 1, minWidth: '200px',  marginLeft:{ xs:'0rem', sm: '6rem'} }}>
        <img
          src="/img/logo.svg"
          alt="Logo"
          style={{ width: '100%', maxWidth: '150px' }}
        />
      </Box>

      {/* Columna 2: Contacto */}
      <Box sx={{ flex: 1, minWidth: '200px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <PhoneIcon sx={{ color: 'white' }} /> {/* Icono blanco */}
          <Typography variant="body1" sx={{ marginLeft: '0.5rem' }}>
            234 5455104
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <WhatsAppIcon sx={{ color: 'white' }} /> {/* Icono blanco */}
          <Typography variant="body1" sx={{ marginLeft: '0.5rem' }}>
            +54 9 234 545-5104
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <EmailIcon sx={{ color: 'white' }} /> {/* Icono blanco */}
          <Typography variant="body1" sx={{ marginLeft: '0.5rem' }}>
            flopez.inmobiliario@gmail.com
          </Typography>
        </Box>
      </Box>

      {/* Columna 3: Ubicación y otros */}
      <Box sx={{ flex: 1, minWidth: '200px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <LocationOnIcon sx={{ color: 'white' }} /> {/* Icono blanco */}
          <Typography variant="body1" sx={{ marginLeft: '0.5rem' }}>
            Av. Cabral 3320 - Saladillo - Bs As.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <AccessTimeIcon sx={{ color: 'white' }} /> {/* Icono blanco */}
          <Typography variant="body1" sx={{ marginLeft: '0.5rem' }}>
            Horarios: Lunes a viernes de 10 a 18 hs.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <FacebookIcon sx={{ color: 'white' }} /> {/* Icono blanco */}
          <Typography variant="body1" sx={{ marginLeft: '0.5rem' }}>
            Facebook FLopez
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export { Footer };
