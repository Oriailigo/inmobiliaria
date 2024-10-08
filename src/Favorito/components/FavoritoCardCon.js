import React from 'react';
import { Card, CardHeader, CardContent, Typography, Button, Divider, Checkbox, IconButton, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';

function FavoritoCardCon() {
  return (
    <Card
      sx={{
        width: { xs: '100%', sm: '600px' }, // 100% en pantallas pequeñas, 400px en pantallas medianas en adelante
        height: { xs: 'auto', sm: 'auto' }, // Altura automática en pantallas pequeñas, se ajusta según el contenido
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
      <Divider />

      {/* Nueva fila de encabezado sobre el Divider */}
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem', padding: '1rem 1rem' }}>
        {/* Columna 1: Checkbox */}
        <Checkbox />

        {/* Columna 2: Párrafo de encabezado */}
        <Typography variant="body2" sx={{ flex: 1 ,color: 'gray'}}>
          Eliminar todo
        </Typography>

        {/* Columna 3: Icono de basura */}
        <IconButton aria-label="delete" size="small" sx={{ paddingRight: '2rem' }}>
          <DeleteIcon />
        </IconButton>
      </Box>

      <Divider />

      {/* Contenido del cuerpo */}
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* Fila de contenido con 4 columnas */}
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
          {/* Columna 1: Checkbox */}
          <Checkbox />

          {/* Columna 2: Imagen */}
          <Box
            component="img"
            sx={{ width: '60px', height: '60px', borderRadius: '8px' }}
            src="https://via.placeholder.com/60" // Imagen de ejemplo
            alt="Propiedad"
          />

          {/* Columna 3: Dos párrafos en filas separadas */}
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="body2">Alquiler Casa 3 ambientes amplio</Typography>
            <div sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          
              <Typography variant="body2" color="text.secondary">500.000 ARS</Typography>
              <Typography variant="body2" color="text.secondary">+150.000 ARS expensas</Typography>
            </div>
          </Box>

          {/* Columna 4: Icono de basura */}
          <IconButton aria-label="delete" size="small">
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}

export { FavoritoCardCon };
