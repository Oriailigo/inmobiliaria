import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './Tabla.css'; // Importamos los estilos personalizados

// Función para crear datos de ejemplo
const createData = (photo, username, email) => {
  return { photo, username, email };
};

// Datos de ejemplo para la tabla
const rows = [
  createData('../img/user1.svg', 'Franco Lopez', 'FrancoLopez@gmail.com'),
  createData('../img/user2.svg', 'Usuario2', 'usuario2@gmail.com'),
  createData('../img/user3.svg', 'Usuario3', 'usuario3@gmail.com'),
  createData('../img/user4.svg', 'Usuario4', 'usuario4@gmail.com'),
];

const TablaUsuarios = () => {
  return (
    <TableContainer component={Paper} className="table-container">
      <Table className='table-with'>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6" className="dashboard-title">
                Usuarios conectados
              </Typography>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index} className="conten-flex">
              <TableCell>
                <img src={row.photo} alt="Perfil" className="profile-image" />
              </TableCell>
              <TableCell align="left">{row.username}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell align="right">
                {/* Puedes agregar botones de acciones aquí si es necesario */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { TablaUsuarios };
