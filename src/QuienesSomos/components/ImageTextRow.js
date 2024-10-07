import React from 'react';
import { Grid, Typography } from '@mui/material';

function ImageTextRow({ title, imageUrl, altText, description, reverse }) {
  return (
    <Grid container spacing={6} sx={{ marginTop: 3 }}>
      {/* Imagen arriba en dispositivos móviles */}
      <Grid item xs={12} md={6} order={{ xs: 1, md: reverse ? 2 : 1 }}>
        <img src={imageUrl} alt={altText} style={{ width: '100%', height: 'auto' }} />
      </Grid>
      {/* Texto abajo en móviles y cambia de posición en pantallas grandes */}
      <Grid item xs={12} md={6} order={{ xs: 2, md: reverse ? 1 : 2 }}>
        {title && <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center' }} gutterBottom>{title}</Typography>}
        <Typography sx={{ fontWeight: 'bold' }} variant="body1" paragraph>{description}</Typography>
      </Grid>
    </Grid>
  );
}

export  {ImageTextRow};
