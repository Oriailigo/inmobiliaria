import React from 'react';
import { Grid, Box } from '@mui/material';
import {MapComponent} from './components/MapComponent';
import {PropertySearchForm} from './components/PropertySearchForm';

function PropertySearchPage() {
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
        {/* Primera columna - Mapa */}
        <Grid item xs={12} md={6}>
          <MapComponent 
           
          />
        </Grid>

        {/* Segunda columna - Buscador de Propiedades */}
        <Grid item xs={12} md={6} display="flex" flexDirection="column" alignItems="center">
          <PropertySearchForm
            cities={['Buenos Aires', 'Córdoba', 'Rosario']}
            localities={['Todas las localidades', 'Palermo', 'Recoleta', 'Belgrano']}
            operations={['Venta', 'Alquiler', 'Permuta']}
            propertyTypes={['Casa', 'Departamento', 'Terreno', 'Local Comercial']}
            bedrooms={['1 Dormitorio', '2 Dormitorios', '3 Dormitorios', '4+ Dormitorios']}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export  {PropertySearchPage};
