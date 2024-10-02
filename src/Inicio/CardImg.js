import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import './ActionAreaCard.css'; // Importamos el archivo de estilos

function CardImg() {
  return (
    <Card sx={{ maxWidth: 345, position: 'relative' }}>
      <CardActionArea>
        {/* Contenedor de la imagen y elementos superpuestos */}
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            height="200"
            image="https://d1acdg20u0pmxj.cloudfront.net/ar/assets/media/webp/home/bg-remax-emprendimientos.webp"
            alt="Imagen de ejemplo"
          />
          
          {/* Contenido superpuesto sobre la imagen */}
          <Box className="overlay-content">
            {/* Texto alineado a la izquierda */}
            <Typography className="overlay-text" variant="h6">
              Gonzales y San Millan
            </Typography>
            
           {/* Contenedor padre para íconos, números y textos */}
            <Box className="overlay-info-container">
               {/* Textos alineados a la izquierda */}
               <Typography className="overlay-details" variant="body2">
                ¡Esta casa es un sueño! Ubicada en la zona norte.
              </Typography>
              {/* Iconos alineados a la izquierda */}
              <Box className="overlay-icons">
                <IconButton size="small" color="inherit">
                  <FavoriteIcon />
                </IconButton>
                <IconButton size="small" color="inherit">
                  <ShareIcon />
                </IconButton>
              </Box>

              {/* Números alineados a la izquierda */}
              <Typography className="overlay-numbers" variant="body2">
                3 &nbsp; &nbsp; 2 
              </Typography>

              {/* Textos alineados a la izquierda */}
              <Typography className="overlay-details" variant="body2">
                Dormitorios &nbsp; &nbsp; baños
              </Typography>
            </Box>

          </Box>
        </Box>

      </CardActionArea>

    
    </Card>
  );
}
export {CardImg}