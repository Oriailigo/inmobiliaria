import React , { useState }from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Button, Box, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {CardEmprendimientos} from './componentes/CardEmprendimientos';
import {CardUbicacion} from './componentes/CardUbicacion';
import {CardTipoPropiedad} from './componentes/CardTipoPropiedad';
import {CardPrecio} from './componentes/CardPrecio';
import {CardAmbientes} from './componentes/CardAmbientes';
import './Filtros.css'; // Importamos los estilos

function FiltroPopUp({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md" scroll="paper">
    <DialogTitle>
      Filtros
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{ position: 'absolute', right: 8, top: 8 }}
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>
    <DialogContent dividers>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CardEmprendimientos />
          <CardUbicacion />
          <CardTipoPropiedad />
          <CardPrecio />
          <CardAmbientes />
          {/* Agrega más Cards aquí según sea necesario */}
        </Grid>
      </Grid>
    </DialogContent>
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
      <Button variant="outlined" sx={{ marginRight: 2 }}>
        Limpiar Filtros
      </Button>
      <Button variant="contained" color="primary">
        Ver Resultados
      </Button>
    </Box>
  </Dialog>
  );
}

export { FiltroPopUp };
