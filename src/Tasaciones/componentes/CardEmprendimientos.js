import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

function CardEmprendimientos() {
  const [selected, setSelected] = useState('');

  const handleClick = (value) => {
    setSelected(value);
  };

  const isSelected = (value) => selected === value;

  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6" sx={{ marginBottom: 2 }}><b>Operacion</b></Typography>
       
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap', // Permite que los botones se envuelvan en varias filas
            gap: '1rem', // Espacio entre los botones
            justifyContent: { xs: 'center', sm: 'space-between' }, // Centrar en móviles
          }}
        >
          {['Comprar', 'Alquiler', 'Alquiler temporario'].map((etapa) => (
            <Button
              key={etapa}
              variant={isSelected(etapa) ? 'contained' : 'outlined'}
              color={isSelected(etapa) ? 'grey' : 'primary'}
              onClick={() => handleClick(etapa)}
              sx={{
                flex: { xs: '1 1 100%', sm: '1 1 auto' }, // Ocupa el 100% del ancho en móviles y el ancho automático en pantallas grandes
                textAlign: 'center', // Centrar el texto
              }}
            >
              {etapa}
            </Button>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

export { CardEmprendimientos };
