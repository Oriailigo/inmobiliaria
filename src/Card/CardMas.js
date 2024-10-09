import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './CardInfo.css';
import {AccordionExpandIcon} from '../Card/AcordeonInfo';
import {CardIcon} from '../Card/CardIcon';

function CardMa({ text }) {
  return (
    <Card className="contact-card">
      <CardContent>
        {/* Título de la tarjeta */}
        <Typography variant="h5" component="h3" className="info-title">
          Descripción
        </Typography>

        {/* Contenedor de 2 columnas debajo del título */}
        <div className="info-columns">
          <AccordionExpandIcon text={text}/>
        </div>
        <hr className="separator" />
          {/* Contenedor de 2 columnas debajo del título */}
          <div className="info-columns">
          <CardIcon/>
        </div>
      </CardContent>
    </Card>
  );
}

export {CardMa};
