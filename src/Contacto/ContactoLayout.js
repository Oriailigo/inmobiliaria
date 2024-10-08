import React from 'react';
import { Box, Grid } from '@mui/material';
import { ContactForm } from './components/ContactForm';

function ContactoLayout() {
  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>

        {/* Imagen de fondo solo para móviles */}
        <Box
          sx={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('/img/contact.svg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1, // Coloca la imagen detrás del card
            display: { xs: 'block', sm: 'none' } // Solo en móvil
          }}
        />

        {/* Contenedor para el Card */}
        <Box
          sx={{
            width: '100%',
            maxWidth: '400px', // Max width for the Card
            position: 'relative',
            padding: 2,
            zIndex: 1, // Asegúrate de que el Card esté delante de la imagen
            display: 'flex',
            justifyContent: 'center', // Centrar horizontalmente
            alignItems: 'center', // Centrar verticalmente
            flexDirection: 'column',
            margin: '0 auto', // Asegurar que el card esté centrado
            background: 'none', // Fondo transparente
            border: 'none', // Sin bordes
            boxShadow: 'none', // Sin sombras

          }}
        >
          <ContactForm

          />
        </Box>

      </Grid>

      <Grid item xs={12} sm={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
        {/* Imagen al lado del formulario (opcional, solo para pantallas grandes) */}
        <Box
          component="img"
          src="/img/contact.svg"
          alt="Descripción de la imagen"
          sx={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            borderRadius: 1,
          }}
        />
      </Grid>
    </Grid>
  );
}

export { ContactoLayout };
