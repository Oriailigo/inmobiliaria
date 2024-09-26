import React from 'react';
import { Typography, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function PropertySearchForm({ cities, localities, operations, propertyTypes, bedrooms }) {
  return (
    <Box sx={{ width: '80%' }}>
      {/* Título centrado */}
      <Typography variant="h5" align="center" gutterBottom>
        Buscador
      </Typography>

      {/* Descripción centrada */}
      <Typography variant="body1" align="center" paragraph>
        Busca la propiedad que más se adapte a ti.
      </Typography>

      {/* Selector de ciudades */}
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>Buenos Aires</InputLabel>
        <Select defaultValue="">
          {cities.map((city, index) => (
            <MenuItem key={index} value={city}>{city}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Selector de localidades */}
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>Todas las localidades</InputLabel>
        <Select defaultValue="">
          {localities.map((locality, index) => (
            <MenuItem key={index} value={locality}>{locality}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Selector de operaciones */}
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>Operación</InputLabel>
        <Select defaultValue="">
          {operations.map((operation, index) => (
            <MenuItem key={index} value={operation}>{operation}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Selector de tipos de propiedad */}
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>Tipo de Inmueble</InputLabel>
        <Select defaultValue="">
          {propertyTypes.map((propertyType, index) => (
            <MenuItem key={index} value={propertyType}>{propertyType}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Selector de dormitorios */}
      <FormControl fullWidth>
        <InputLabel>Dormitorios</InputLabel>
        <Select defaultValue="">
          {bedrooms.map((bedroom, index) => (
            <MenuItem key={index} value={bedroom}>{bedroom}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export {PropertySearchForm};
