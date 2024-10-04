import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

function CardAmbientes() {
  const [selected, setSelected] = useState('');

  const handleClick = (value) => {
    setSelected(value);
  };

  const isSelected = (value) => selected === value;

  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">Ambientes</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
          {[1, 2, 3, 4, 5, '+6'].map((ambiente) => (
            <Button
              key={ambiente}
              variant={isSelected(ambiente) ? 'contained' : 'outlined'}
              color={isSelected(ambiente) ? 'primary' : 'grey'}
              onClick={() => handleClick(ambiente)}
              sx={{ marginRight: 1, marginBottom: 1 }} // Añade separación de 1 rem
            >
              {ambiente}
            </Button>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

export { CardAmbientes };
