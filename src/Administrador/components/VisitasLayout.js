import React from 'react';
import { Box, Typography } from '@mui/material';
import { GraficoVisitas } from './GraficoVisitas';
import { TraficoUsuarios } from './TraficoUser';
import { PropiedadesVisitadas } from './PropiedadesVisitadas';
import { RecientesUsuarios } from './RecientesUsuarios';
const VisitasLayout = () => {
  return (
    <Box>
      {/* Primera fila */}
      <Box display={{ xs: 'block', md: 'flex' }} mb={2}>
        <Box flex={1} md={0.8} bgcolor="#f0f0f0" p={2} borderRadius={1} mb={{ xs: 2, md: 0 }}>
          <Typography variant="h6">Contenido del primer div (90%)</Typography>
          <GraficoVisitas/>
        </Box>
        <Box flex={1} md={0.2} bgcolor="#e0e0e0" p={2} borderRadius={1}>
        <TraficoUsuarios/>
          <Typography variant="h6">Contenido del segundo div (40%)</Typography>
        </Box>
      </Box>

      {/* Segunda fila */}
      <Box display={{ xs: 'block', md: 'flex' }}>
        <Box flex={1} md={0.8} bgcolor="#f0f0f0" p={2} borderRadius={1} mb={{ xs: 2, md: 0 }}>
        <PropiedadesVisitadas/>
          <Typography variant="h6">Contenido del tercer div (60%)</Typography>
        </Box>
        <Box flex={1} md={0.2} bgcolor="#e0e0e0" p={2} borderRadius={1}>
        <RecientesUsuarios/>
          <Typography variant="h6">Contenido del cuarto div (40%)</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export { VisitasLayout };
