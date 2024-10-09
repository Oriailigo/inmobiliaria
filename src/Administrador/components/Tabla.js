import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Link, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './Tabla.css'; // Importamos los estilos personalizados

// Función para crear datos de ejemplo
const createData = (photo, description, price, date) => {
  return { photo, description, price, date };
};

// Datos de ejemplo para la tabla
const rows = [
  createData('https://via.placeholder.com/150', 'Propiedad en el centro', '$200,000', '2024-01-01'),
  createData('https://via.placeholder.com/150', 'Casa con vista al mar', '$500,000', '2024-01-02'),
  createData('https://via.placeholder.com/150', 'Apartamento moderno', '$350,000', '2024-01-03'),
];

const Tabla = () => {
  return (
    <TableContainer component={Paper} className="table-container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
            <Typography variant="h6" className="dashboard-title">
            Editar propiedades
                    </Typography>
                </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell align="right">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <img src={row.photo} alt="Propiedad" className="property-image" />
              </TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>
                <Typography>{row.price}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {row.date}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Link href="#" underline="none" className="view-link">
                  <Button startIcon={<VisibilityIcon />} size="small">
                    Ver
                  </Button>
                </Link>
                <IconButton aria-label="edit" color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" color="error">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export  {Tabla};
