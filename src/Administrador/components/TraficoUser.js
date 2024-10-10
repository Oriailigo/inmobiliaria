import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, LinearProgress,FormControl,MenuItem, InputLabel, Select } from '@mui/material';

const TraficoUsuarios = () => {
  const [timeframe, setTimeframe] = useState('Last 7 days');

  const progressData = [
    { label: 'Direct', value: 70 }, // Porcentaje de progreso
    { label: 'Referral', value: 50 },
    { label: 'Social Media', value: 80 },
    { label: 'Twitter', value: 60 },
  ];

  const handleTimeframeChange = (newTimeframe) => {
    setTimeframe(newTimeframe);
    // Aquí puedes agregar lógica adicional si es necesario.
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Tráfico de Usuario</Typography>
          <FormControl variant="outlined" size="small">
            <InputLabel>Seleccionar tiempo</InputLabel>
            <Select
              value={timeframe}
              onChange={handleTimeframeChange}
              label="Seleccionar tiempo"
            >
              {['Last 7 days', '30 days', '6 months', '12 months'].map((label) => (
                <MenuItem key={label} value={label}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {progressData.map((item, index) => (
          <Box key={index} mt={2}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body1">{item.label}</Typography>
              <Typography variant="body1">{item.value}%</Typography>
            </Box>
            <LinearProgress variant="determinate" value={item.value} style={{ backgroundColor: '#f3f3f3', marginTop: '0.5rem', height: '10px' }} />
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export { TraficoUsuarios };
