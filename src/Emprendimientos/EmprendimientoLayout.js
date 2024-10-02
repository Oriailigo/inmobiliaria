import React, { useState } from 'react';
import { Box, Button, Typography, IconButton, Chip, Stack } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './EmprendimientoLayout.css';

function EmprendimientoLayout({ tag1, tag2, priceFrom, priceTo, description, feature1, feature2 }) {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="my-component">
      <div className="my-component__row">
        {/* Primera Columna: Carrusel de Imágenes */}
        <Box className="my-component__carousel" flex={1}>
          <Typography variant="h6">Carrusel de Imágenes</Typography>
          {/* Aquí puedes integrar el carrusel */}
        </Box>

        {/* Segunda Columna: Información */}
        <Box className="my-component__info" flex={2}>

          {/* Primera Fila: Tags */}
          <Stack direction="row" spacing={1} className="my-component__tags">
            <Chip label={tag1} />
            <Chip label={tag2} />
          </Stack>

          {/* Segunda Fila: Desde - Hasta */}
          <Box className="my-component__date">
            <Typography>Desde: {priceFrom}</Typography>
            <Typography>Hasta: {priceTo}</Typography>
          </Box>

          {/* Tercera Fila: Precios */}
          <Box className="my-component__prices">
            <Typography variant="h5">{priceFrom} - {priceTo}</Typography>
          </Box>

          {/* Cuarta Fila: Descripción */}
          <Typography className="my-component__description">
            {description}
          </Typography>

          {/* Quinta Fila: Iconos con texto */}
          <Box className="my-component__features">
            <Stack direction="row" alignItems="center" spacing={1}>
              <WhatsAppIcon />
              <Typography>{feature1}</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <PhoneIcon />
              <Typography>{feature2}</Typography>
            </Stack>
          </Box>

          {/* Sexta y Séptima Fila: Texto adicional */}
          <Typography className="my-component__extra-info">Texto adicional 1</Typography>
          <Typography className="my-component__extra-info">Texto adicional 2</Typography>

          {/* Octava Fila: Iconos (WhatsApp, Teléfono, Mensaje) */}
          <Box className="my-component__contact-icons">
            <IconButton color="primary">
              <WhatsAppIcon />
            </IconButton>
            <IconButton color="primary">
              <PhoneIcon />
            </IconButton>
            <IconButton color="primary">
              <MessageIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Tercera Columna: Botón "Me Gusta" */}
        <Box className="my-component__like" flex={1}>
          <IconButton onClick={handleLikeClick} color={liked ? "error" : "default"}>
            <FavoriteIcon />
          </IconButton>
        </Box>
      </div>
    </div>
  );
}

export {EmprendimientoLayout};
