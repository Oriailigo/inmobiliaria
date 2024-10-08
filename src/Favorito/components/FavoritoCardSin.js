import React from 'react';
import { Card, CardHeader, CardContent, Typography, Button, Divider, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

function FavoritesCard() {
  return (
    <Card
      sx={{
        width: { xs: '100%', sm: '400px' }, // 100% en pantallas pequeñas, 400px en pantallas medianas en adelante
        height: { xs: 'auto', sm: '200px' }, // Altura automática en pantallas pequeñas, 300px en medianas en adelante
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Header con ícono de corazón y título alineados a la izquierda */}
      <CardHeader
        avatar={
          <Box
            sx={{
              border: '1px solid black', // Grosor de 1px y color negro
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FavoriteIcon sx={{ color: 'red', fontSize: 'small' }} />
          </Box>
        }
        title="Favoritos"
        sx={{
          display: 'flex',
          gap: '0rem',
          justifyContent: 'flex-start',
        }}
      />
      <Divider/>
      {/* Contenido del cuerpo */}
      <CardContent sx={{  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        <Typography variant="body1" align="center">
          Aún no hay ninguna propiedad en favoritos.
        </Typography>
        
        <Button
          variant="contained"
          size="small" // Botón de tamaño pequeño
          sx={{ backgroundColor: '#FFD466', color: 'black', width: { xs: '100%', sm: 'auto' }, fontWeight: 'bold' }} // 100% en pantallas pequeñas
        >
          Buscar Propiedad
        </Button>
      </CardContent>
    </Card>
  );
}

export { FavoritesCard };
