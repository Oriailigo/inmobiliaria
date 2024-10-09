import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './UbicacionCard.css'; // Importa el archivo CSS
import {MapComponent} from "../VerMapa/components/MapComponent";




const CardMapa = () => {
  return (
    <Card className="card">
      <CardContent>
        <Typography variant="h5" className="title">
          Ubicación
        </Typography>
        <Typography variant="body1" className="paragraph">
          Saravi 2400, Casas del Bosque, La Lonja, Pilar, Buenos Aires
        </Typography>
        <div className="map-container">
        <MapComponent 
           />
        </div>
      </CardContent>
    </Card>
  );
};

export {CardMapa} ;
