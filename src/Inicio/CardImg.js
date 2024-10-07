import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import './ActionAreaCard.css'; // Importamos el archivo de estilos

function CardImg({ image }) {
  return (
    <Card sx={{ maxWidth: { xs: '100%', sm: 591 }, position: 'relative', borderRadius: '8px' }}>
      <CardActionArea>
        {/* Contenedor de la imagen y elementos superpuestos */}
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            height={{ xs: '200', sm: '448' }} // Altura responsiva
            width="100%" // Aseguramos que la imagen ocupe el ancho completo
            image={image}
            alt="Imagen de ejemplo"
            sx={{ objectFit: 'cover' }} // Mantiene la proporción de la imagen
          />
          
          {/* Contenido superpuesto sobre la imagen */}
          <Box className="overlay-content" sx={{ padding: '1rem', position: 'absolute', bottom: '0', left: '0', right: '0', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '0 0 8px 8px' }}>
            {/* Texto alineado a la izquierda */}
            <Typography className="overlay-text" variant="h6" sx={{ color: 'white' }}>
              Gonzales y San Millan
            </Typography>
            
            {/* Contenedor padre para íconos, números y textos */}
            <Box className="overlay-info-container" sx={{ display: 'flex', alignItems: 'left', flexWrap: 'wrap', gap: '0.5rem' }}>
               {/* Textos alineados a la izquierda */}
               <Typography className="overlay-details" variant="body2" sx={{ color: 'white' }}>
                ¡Esta casa es un sueño! Ubicada en la zona norte.
              </Typography>
              {/* Iconos alineados a la izquierda */}
              <Box className="overlay-icons" sx={{ display: 'flex', alignItems: 'left' }}>
                <IconButton size="small" color="inherit" sx={{ color: 'white' }}>
                  <BedIcon />
                </IconButton>
                <IconButton size="small" color="inherit" sx={{ color: 'white' }}>
                  <BathtubIcon />
                </IconButton>
              </Box>

              {/* Números alineados a la izquierda */}
              <Typography className="overlay-numbers" variant="body2" sx={{ color: 'white' }}>
                3 &nbsp; &nbsp; 2 
              </Typography>

              {/* Textos alineados a la izquierda */}
              <Typography className="overlay-details" variant="body2" sx={{ color: 'white' }}>
                Dormitorios &nbsp; &nbsp; baños
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
}

export { CardImg };
