import React from 'react';
import { Grid, Box, Card } from '@mui/material';
import { ContactForm } from './Form';
import './ContactoLayout.css';

function ContactoLayout() {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2} className="container">
        {/* Primera columna - ContactForm */}
        <Grid item xs={12} md={6} className="columna1">
          <Card className="form-card">
            <ContactForm />
          </Card>
        </Grid>

        {/* Segunda columna - Imagen */}
        <Grid item xs={12} md={6} className="columna2">
          <Box className="image-container">
            <img
              src="https://via.placeholder.com/500"
              alt="Descripción de la imagen"
              className="responsive-image"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export { ContactoLayout };
