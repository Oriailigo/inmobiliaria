import React, { useState } from 'react';
import { Card, CardContent, Button, Typography, TextField, Link, MenuItem, Select, FormControl, InputLabel, Box } from '@mui/material';


function DataForm() {
  const [category, setCategory] = React.useState('');
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Card sx={{ maxWidth: 500, width: '100%', padding: 3, backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: 2 }}>
      <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        
        {/* Título actualizado */}
        <Typography variant="h6" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          Datos Personales
        </Typography>
        
        {/* Input para Nombre */}
        <TextField
          fullWidth
          label="Nombre*"
          placeholder="Ingrese su nombre"
          margin="normal"
          variant="outlined"
        />

        {/* Input para Apellido */}
        <TextField
          fullWidth
          label="Apellido*"
          placeholder="Ingrese su apellido"
          margin="normal"
          variant="outlined"
        />

        {/* Input para Datos de contacto */}
        {/* Título actualizado */}
        <Typography variant="body" align="left" gutterBottom sx={{ fontWeight: 'bold' }}>
          Datos de contacto
        </Typography>
        <TextField
          fullWidth
          label="Datos de contacto*"
          placeholder="Ingrese su correo electrónico o número de teléfono"
          margin="normal"
          variant="outlined"
        />

        {/* Select y teléfono celular en la misma fila */}
         {/* Título actualizado */}
         <Typography variant="body" align="left" gutterBottom sx={{ fontWeight: 'bold' }}>
          Opcional
        </Typography>
        <Box sx={{ display: 'flex', gap: '1rem', width: '100%', marginTop: '1rem' }}>
          {/* Select para Código de país */}
          <FormControl fullWidth sx={{ display: 'flex', justifyContent: 'center'  }}>
            <InputLabel id="country-code-label"sx={{ display: 'flex', justifyContent: 'center' ,alignItems: 'center'  }} >Código de país</InputLabel>
            <Select
              labelId="country-code-label"
              value={category}
              onChange={handleCategoryChange}
              label="Código de país*"
            >
              <MenuItem value="arg">Argentina (+54)</MenuItem>
              <MenuItem value="usa">Estados Unidos (+1)</MenuItem>
              <MenuItem value="es">España (+34)</MenuItem>
            </Select>
          </FormControl>

          {/* Input para Teléfono celular */}
          <TextField
            fullWidth
            label="Teléfono celular*"
            placeholder="Ingrese su teléfono"
            margin="normal"
            variant="outlined"
          />
        </Box>

        {/* Contraseña y Nueva contraseña en la misma fila */}
        <Box sx={{ display: 'flex', gap: '1rem', width: '100%', marginTop: '1rem' }}>
          {/* Input para Contraseña */}
          <TextField
            fullWidth
            label="Contraseña*"
            type="password"
            placeholder="Ingrese su contraseña"
            margin="normal"
            variant="outlined"
          />

          {/* Input para Nueva contraseña */}
          <TextField
            fullWidth
            label="Nueva contraseña*"
            type="password"
            placeholder="Ingrese su nueva contraseña"
            margin="normal"
            variant="outlined"
          />
        </Box>

        {/* Botón de guardar cambios */}
        <Button
          fullWidth
          variant="contained"
          sx={{ backgroundColor: '#FFD466', color: 'gray', marginTop: 2 }}
          onClick={handleOpenModal}
        >
          Guardar cambios
        </Button>


       
      </CardContent>
    </Card>
  );
}

export { DataForm };
