import React from 'react';
import { Card, CardContent, Typography, Select, MenuItem, TextField, Box } from '@mui/material';

function CardPrecio() {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6"><b>Precio</b></Typography>
        <Box 
          sx={{
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' }, // En móviles (xs), columna; en pantallas más grandes, fila
            justifyContent: 'flex-start', // Alinear a la izquierda
            alignItems:{ sm: 'flex-end' },
            marginTop: 1,
            gap: 1 // Espacio entre elementos de 1 rem
          }}
        >
          <Select 
            defaultValue="USD" 
            sx={{ marginRight: { sm: 2 }, height: '56px' }} // Ajustar la altura
          >
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="ARS">ARS</MenuItem>
          </Select>
          
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body2">Desde</Typography>
            <TextField type="number" sx={{ height: '56px' }} /> {/* Ajustar la altura */}
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body2">Hasta</Typography>
            <TextField type="number" sx={{ height: '56px' }} /> {/* Ajustar la altura */}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export { CardPrecio };
