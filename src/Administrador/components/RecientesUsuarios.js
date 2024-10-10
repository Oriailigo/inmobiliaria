import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';

// Estilo para la imagen redonda
const RoundImage = styled('img')({
  borderRadius: '50%',
  width: '40px', // Ajusta el tamaño según sea necesario
  height: '40px', // Ajusta el tamaño según sea necesario
});

const RecientesUsuarios = () => {
  const usuarios = [
    { nombre: 'Juan Pérez', email: 'juan.perez@example.com', ciudad: 'Buenos Aires', foto: 'https://via.placeholder.com/40' },
    { nombre: 'Ana Gómez', email: 'ana.gomez@example.com', ciudad: 'Córdoba', foto: 'https://via.placeholder.com/40' },
    { nombre: 'Luis Martínez', email: 'luis.martinez@example.com', ciudad: 'Rosario', foto: 'https://via.placeholder.com/40' },
    { nombre: 'Laura Fernández', email: 'laura.fernandez@example.com', ciudad: 'La Plata', foto: 'https://via.placeholder.com/40' },
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          Recientes Usuarios
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Lorem ipsum dolor sit amet.
        </Typography>

        <Box mt={2}>
          {usuarios.map((usuario, index) => (
            <Box key={index} display="flex" alignItems="center" justifyContent="space-between" mb={1}>
              <RoundImage src={usuario.foto} alt={usuario.nombre} />
              <Box ml={2}>
                <Typography variant="body1">{usuario.nombre}</Typography>
                <Typography variant="body2" color="textSecondary">{usuario.email}</Typography>
              </Box>
              <Typography variant="body2">{usuario.ciudad}</Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export { RecientesUsuarios };
