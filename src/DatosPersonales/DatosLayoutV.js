import React from 'react';
import { Box, Grid } from '@mui/material';
import { DataForm } from './components/DatosPersonalesForm';

function DatosLayoutV() {
  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>

   

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
          <DataForm

          />
        </Box>

      </Grid>

      
    </Grid>
  );
}

export { DatosLayoutV };
