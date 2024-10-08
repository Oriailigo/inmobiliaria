import React from 'react';
import { Card, CardHeader, CardContent, Typography, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

function FavoritesCard() {
  return (
    <Card sx={{ width: '400px', height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* Header con ícono de corazón y título */}
      <CardHeader
        avatar={<FavoriteIcon sx={{ color: 'red' }} />}
        title="Favoritos"
        sx={{ textAlign: 'center' }}
      />
      
      {/* Contenido del cuerpo */}
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        <Typography variant="body1" align="center">
          Aún no hay ninguna propiedad en favoritos.
        </Typography>
        
        <Button
          variant="contained"
          sx={{ backgroundColor: '#FFD466', color: 'black', width: '100%' }}
        >
          Buscar Propiedad
        </Button>
      </CardContent>
    </Card>
  );
}

export { FavoritesCard };
