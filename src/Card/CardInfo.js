import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Phone, MailOutline, Home } from '@mui/icons-material';
import './CardInfo.css';

function CardIn() {
  return (
    <Card className="contact-card">
      <CardContent>
        {/* Título de la tarjeta */}
        <Typography variant="h5" component="h3" className="info-title">
          Información de Contacto
        </Typography>

        {/* Contenedor de 2 columnas debajo del título */}
        <div className="info-columns">
          <div className="info-column">
            {/* Primera columna con 3 íconos */}
            <div className="info-row">
              <Phone className="icon" />
              <p>+1 123 456 7890</p>
            </div>
            <div className="info-row">
              <MailOutline className="icon" />
              <p>correo@ejemplo.com</p>
            </div>
            <div className="info-row">
              <Home className="icon" />
              <p>123 Calle Principal</p>
            </div>
          </div>

          <div className="info-column">
            {/* Segunda columna con íconos adicionales si es necesario */}
            {/* Puedes añadir más iconos o contenido aquí */}
            <div className="info-row">
              <MailOutline className="icon" />
              <p>correo@ejemplo.com</p>
            </div>
            <div className="info-row">
              <Home className="icon" />
              <p>123 Calle Principal</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export {CardIn};
