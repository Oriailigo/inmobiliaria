import React, { useState } from 'react';
import { Card, CardContent, CardMedia, IconButton, Grid, Typography, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from "react-router-dom";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BathtubIcon from '@mui/icons-material/Bathtub';
import BedIcon from '@mui/icons-material/Bed';
import './CardImg.css'; // Importar el archivo CSS
import { Link } from 'react-router-dom'; // Importar Link para la navegación

function CardImg({ image }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };

  const navigate = useNavigate(); // Hook para la redirección

  const handleClick = () => {
    navigate("/Alquiler"); // Redirige a la página de Alquiler
  };

  return (
    
    <Card sx={{ display: 'flex', gap: { xs: '0rem', sm: '2rem' }, flexDirection: { xs: 'column', sm: 'row' }, width: '100%', marginBottom: '20px' }}>
      {/* Imagen que ocupa la mitad izquierda */}
        <CardMedia
          component="img"
          sx={{ width: { xs: '100%', sm: '50%' }, height: { xs: '200px', sm: '450px' },cursor: 'pointer', }}  // Ajustes responsivos
          image={ image }
          alt="Imagen"
          onClick={handleClick}
         
        />
     
      {/* Contenido del lado derecho */}
      <CardContent sx={{ width: { xs: '100%', sm: '50%' }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Grid container spacing={2}>
          {/* Fila del precio y corazón */}
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: { xs: 'space-between', sm: 'space-between' },
              gap:'-2 rem',
              alignItems: 'center',
              flexDirection: { xs: 'row', sm: 'row' }, // Siempre en fila, incluso en móviles
              position: 'relative',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start',alignItems: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'black', fontSize: { xs: '1.5rem', sm: '2rem' } }}>
                500.000 ARS
              </Typography>
              <Typography variant="body2" sx={{ color: 'gray' }}>
                +150.000 ARS expensas
              </Typography>
            </Box>

            {/* Ícono de corazón */}
            <IconButton
              onClick={handleFavoriteClick}
              className={`favorite-icon ${isFavorited ? 'favorited' : ''}`}
            >
              <FavoriteIcon
                sx={{
                  marginRight: { xs: '2rem', sm: '0rem' },
                  color: isFavorited ? 'red' : 'inherit', // Cambia el color a rojo si está favorito
                }}
              />
            </IconButton>
          </Grid>

          <Grid item xs={12}>
            {/* Fila 2: Dirección */}
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              Avenida Ángel Gallardo 1000
            </Typography>

            {/* Fila 3: 4 íconos alineados a la izquierda */}
            <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap', marginTop: '2rem', marginBottom: '2rem' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
             
              <div>
                <img src="https://www.remax.com.ar/assets/media/svg/layout/icons/total-surface.svg" alt="Icono" width={24} height={24} /> {/* Usas la imagen como ícono */}
              </div>
                <Typography variant="caption">520m² totales</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <div>
                <img src="https://www.remax.com.ar/assets/media/svg/layout/icons/covered-surface.svg" alt="Icono" width={24} height={24} /> {/* Usas la imagen como ícono */}
              </div>
                <Typography variant="caption">450m² cubiertos</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
               
                <div>
                  <img src="https://www.remax.com.ar/assets/media/svg/layout/icons/rooms.svg" alt="Icono" width={24} height={24} /> {/* Usas la imagen como ícono */}
                </div>
                <Typography variant="caption">3 ambientes</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <div>
                  <img src="https://www.remax.com.ar/assets/media/svg/layout/icons/bathrooms.svg" alt="Icono" width={24} height={24} /> {/* Usas la imagen como ícono */}
                </div>
                <Typography variant="caption">2 baños</Typography>
              </Box>
            </Box>

            {/* Fila 4: Párrafos */}
            <Typography variant="body2" sx={{fontWeight: 'bold'  }}>Alquiler Casa 3 ambientes amplio</Typography>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Corredores responsables Franco Lopez.</Typography>

            {/* Fila 5: Iconos de contacto (WhatsApp, teléfono, mail) */}
            <Box sx={{ display: 'flex', gap: '8px', marginTop:{ xs: '4rem', sm: '8rem' } }}>
              <IconButton sx={{ backgroundColor:'#25D366' }} >
                <WhatsAppIcon sx={{ color: 'white', backgroundColor:'#25D366' }} />
              </IconButton>
              <IconButton sx={{ border: '0.5px solid gray' }}>
                <PhoneIcon  />
              </IconButton>
              <IconButton sx={{ border: '0.5px solid gray' }}>
                <MailIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  
  );
}

export {CardImg};
