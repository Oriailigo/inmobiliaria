import React from 'react';
import { Card, CardContent, Typography, TextField } from '@mui/material';

function CardUbicacion() {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">Ubicación</Typography>
        <TextField
          fullWidth
          placeholder="¿Dónde querés mudarte?"
          variant="outlined"
          sx={{ marginTop: 1 }}
        />
      </CardContent>
    </Card>
  );
}

export {CardUbicacion};
