import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { DatosLayoutV } from './DatosLayoutV'; // Si tienes este layout

function DatosLayout() {
  const [selectedTab, setSelectedTab] = useState('datos'); // Estado para controlar el tab seleccionado

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <Box sx={{ display: 'flex', padding: 3 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 2 }}>
        {/* Botón para "Datos" */}
        <Button
          variant={selectedTab === 'datos' ? 'contained' : 'outlined'} // Contained si es el tab seleccionado
          onClick={() => handleTabChange('datos')}
          sx={{ width: '100%', marginBottom: 1 }} // Espaciado entre botones
        >
          Datos
        </Button>

        {/* Botón para "Eliminar cuenta" */}
        <Button
          variant={selectedTab === 'eliminar' ? 'contained' : 'outlined'} // Contained si es el tab seleccionado
          onClick={() => handleTabChange('eliminar')}
          sx={{ width: '100%' }} // Espaciado entre botones
        >
          Eliminar cuenta
        </Button>
      </Box>

      {/* Contenedor para mostrar el contenido basado en el botón seleccionado */}
      <Box sx={{ flexGrow: 1, padding: 2, border: '1px solid #ccc', borderRadius: 1 }}>
        {selectedTab === 'datos' && (
         < DatosLayoutV/>
        )}

        {selectedTab === 'eliminar' && (
          <Typography variant="body1">
            Si decides eliminar tu cuenta, perderás todos tus datos. Por favor, confirma que deseas continuar.
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export { DatosLayout };
