import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Phone, MailOutline, Home } from '@mui/icons-material';
import './CardInfo.css';

function CardIn() {
  return (
    <Card className="contact-card">
      <CardContent className="content-mg">
        {/* Título de la tarjeta */}
        <Typography variant="h5" component="h3" className="info-title" sx={{fontWeight:'bold'}}>
          500.000 ARS
        </Typography>
        <Typography variant="body" component="p" className="info-title">
          Expensas: 150.000 ARS
        </Typography>

        {/* Contenedor de 2 columnas debajo del título */}
        <div className="info-columns">
          <div className="info-column">
            {/* Primera columna con 3 íconos */}
            <div className="info-row">
              <img src="https://www.remax.com.ar/assets/media/svg/layout/icons/covered-surface.svg" alt="Icono" width={24} height={24} /> {/* Usas la imagen como ícono */}
              <p>450 cubiertos</p>
            </div>
            <div className="info-row">
              <img src="https://www.remax.com.ar/assets/media/svg/layout/icons/total-surface.svg" alt="Icono" width={24} height={24} />
              <p>520 totales</p>
            </div>
            <div className="info-row">
            <img src="https://www.remax.com.ar/assets/media/svg/layout/icons/antiquity.svg" alt="Icono" width={24} height={24} />
            
              <p>10 años de antiguedad</p>
            </div>
          </div>

          <div className="info-column">
            {/* Segunda columna con íconos adicionales si es necesario */}
            {/* Puedes añadir más iconos o contenido aquí */}
            <div className="info-row">
              <img src="https://www.remax.com.ar/assets/media/svg/layout/icons/rooms.svg" alt="Icono" width={24} height={24} /> {/* Usas la imagen como ícono */}
               
              <p>3 ambientes</p>
            </div>
            <div className="info-row">
              <img src="https://www.remax.com.ar/assets/media/svg/layout/icons/bathrooms.svg" alt="Icono" width={24} height={24} /> {/* Usas la imagen como ícono */}
                
              <p>2 baños</p>
            </div>
            <div className="info-row">
            <img src="https://www.remax.com.ar/assets/media/svg/layout/icons/garage.svg" alt="Icono" width={24} height={24} /> {/* Usas la imagen como ícono */}
             
              <p>2 cocheras</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export {CardIn};
