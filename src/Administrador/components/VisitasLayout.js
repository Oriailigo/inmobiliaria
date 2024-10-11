import React from 'react';
import { Grid,Box, Typography } from '@mui/material';
import { GraficoVisitas } from './GraficoVisitas';
import { TraficoUsuarios } from './TraficoUser';
import { PropiedadesVisitadas } from './PropiedadesVisitadas';
import { RecientesUsuarios } from './RecientesUsuarios';
const VisitasLayout = () => {
  return (
    <Grid container spacing={2}>
    {/* Columna principal (Main) */}
    <Grid item xs={12} md={8}>
      <Box p={2}   sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
           
          }}>
       
        <GraficoVisitas />
        <PropiedadesVisitadas/>
        
      </Box>
    </Grid>

    {/* Columna lateral derecha */}
    <Grid item xs={12} md={4}>
      <Box p={2} sx={{
            display: 'flex',
            flexDirection: 'column',
          
            gap: '2rem',
           
          }}>
      <TraficoUsuarios/>
      <RecientesUsuarios/>
      
      
      </Box>
    </Grid>
    </Grid>
  );
};

export { VisitasLayout };
