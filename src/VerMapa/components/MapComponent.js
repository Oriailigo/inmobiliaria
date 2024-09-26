import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function MapComponent({ coordinates }) {
  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };

  const defaultCenter = coordinates || { lat: -34.603684, lng: -58.381559 }; // Coordenadas por defecto (Buenos Aires)

  return (
    <LoadScript googleMapsApiKey="TU_API_KEY_AQUI">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={defaultCenter}
        zoom={12}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
}

export {MapComponent};
