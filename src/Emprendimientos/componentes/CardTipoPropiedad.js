import React from 'react';
import { Card, CardContent, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

function CardTipoPropiedad() {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">Tipo de Propiedad</Typography>
        <FormControl fullWidth sx={{ marginTop: 1 }}>
          <InputLabel>Tipo de Propiedad</InputLabel>
          <Select defaultValue="Tipo de propiedad">
            <MenuItem value="Tipo de propiedad" disabled>Tipo de propiedad</MenuItem>
            <MenuItem value="casa">Casa</MenuItem>
            <MenuItem value="departamento">Departamento</MenuItem>
          </Select>
        </FormControl>
      </CardContent>
    </Card>
  );
}

export {CardTipoPropiedad};
