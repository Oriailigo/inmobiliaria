import React, { useState } from 'react';
import { Card, CardContent, CardMedia, IconButton, Grid, Typography, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BathtubIcon from '@mui/icons-material/Bathtub';
import BedIcon from '@mui/icons-material/Bed';
import './CardImg.css'; // Importar el archivo CSS
import { Link } from 'react-router-dom'; // Importar Link para la navegación
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function CardImg() {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <Link to="/Alquiler" style={{ textDecoration: 'none', color: 'inherit' }}> {/* Envolviendo el Card con Link */}
    <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, width: '100%', marginBottom: '20px' }}>
      {/* Imagen que ocupa la mitad izquierda */}
      <CardMedia
        component="img"
        sx={{ width: { xs: '100%', sm: '50%' }, height: { xs: '200px', sm: '400px' } }}  // Ajustes responsivos
        image="https://via.placeholder.com/150"
        alt="Imagen"
      />

      {/* Contenido del lado derecho */}
      <CardContent sx={{ width: { xs: '100%', sm: '50%' }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Grid container spacing={2}>
          {/* Fila del precio y corazón */}
          <Stack direction="row" spacing={2}>
              <Chip label="Preventa" />
              <Chip label="Entrega estimada: Sempriembre 2025" variant="outlined" />
          </Stack>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: { xs: 'space-between', sm: 'space-between' },
              
              alignItems: 'center',
              flexDirection: { xs: 'row', sm: 'row' }, // Siempre en fila, incluso en móviles
              position: 'relative',
            }}
          >
             
            <Box sx={{ display: 'flex', flexDirection: 'row',gap: '4rem', alignItems: 'flex-start' }}>
             
              <div>
              <Typography variant="body2" sx={{  color: 'gray', fontSize: { xs: '0.5rem', sm: '1.5rem' } }}>
                Desde
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'black', fontSize: { xs: '1.5rem', sm: '2rem' } }}>
                70.000 USD
              </Typography>
              </div>

              <div>
              <Typography variant="body2" sx={{  color: 'gray', fontSize: { xs: '0.5rem', sm: '1.5rem' } }}>
                Hasta
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'black', fontSize: { xs: '1.5rem', sm: '2rem' } }}>
                90.000 USD
              </Typography>
              </div>
            </Box>

            {/* Ícono de corazón */}
           
          </Grid>

          <Grid item xs={12} >
            {/* Fila 2: Dirección */}
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              Avenida Ángel Gallardo 1000
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              Los Nogales 700 (RG435), Picanyui, Rio Negro, Argentina
            </Typography>
            {/* Fila 3: 4 íconos alineados a la izquierda */}
            <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <BedIcon />
                <Typography variant="caption">6 unidades</Typography>
              </Box>
              
            </Box>

            {/* Fila 4: Párrafos */}
            <Typography variant="body2">Descripción adicional del inmueble</Typography>
            <Typography variant="body2">Información relevante sobre la propiedad</Typography>

            {/* Fila 5: Iconos de contacto (WhatsApp, teléfono, mail) */}
            <Box sx={{ display: 'flex', gap: '8px', marginTop:{ xs: '4rem', sm: '8rem' } }}>
              <IconButton>
                <WhatsAppIcon />
              </IconButton>
              <IconButton>
                <PhoneIcon />
              </IconButton>
              <IconButton>
                <MailIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    </Link>
  );
}

export {CardImg};
