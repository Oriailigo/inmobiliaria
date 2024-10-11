import React from 'react';
import { Dialog, DialogContent, Typography, Box, Card,Button } from '@mui/material';
import './ModalEliminar.css';

function ModalEliminar({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} PaperProps={{ sx: { overflow: 'visible', borderRadius: '2rem',width: '900px',
        height: '400px'} }}>
      <DialogContent sx={{  padding: '2rem', paddingTop: '5rem' }}>
        
        {/* Imagen redonda que sobresale */}

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            
            position: 'relative',
          }}
        >
          {/* card de la imagen con el parrafo */}
          <Card className="inner-card">
                <Box className="content-row">
                {/* Contenedor con imagen */}
                <Box className="image-container-modal">
                    <img
                    src="https://via.placeholder.com/150"
                    alt="Imagen"
                    className="rounded-image"
                    />
                </Box>
                {/* Párrafo al lado de la imagen */}
                <Typography variant="body1">Avenida Angel Gallardo 1000</Typography>
                </Box>
          </Card>

          {/* Segundo título */}
          <Typography variant="h6" fontWeight="bold">
            Eliminar propiedad?
          </Typography>

          {/* Botones debajo del párrafo */}
            <Box className="button-row">
                <Button variant="contained" className="cancel-button" onClick={onClose}>
                Cancelar
                </Button>
                <Button variant="contained" className="delete-button">
                Eliminar
                </Button>
            </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export { ModalEliminar };
