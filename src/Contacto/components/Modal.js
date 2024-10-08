import React from 'react';
import { Dialog, DialogContent, Typography, Avatar, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function CustomModal({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} PaperProps={{ sx: { overflow: 'visible', borderRadius: '2rem',width: '400px',
        height: '400px'} }}>
      <DialogContent sx={{  padding: '2rem', paddingTop: '5rem' }}>
        
        {/* Imagen redonda que sobresale */}
        <Avatar
          alt="Imagen"
          src="/img/venta.svg"
          sx={{
            width: 150, // Ajustamos el tamaño de la imagen
            height: 150,
            position: 'absolute',
            top: '-75px', // Colocamos la mitad de la imagen fuera del modal
            left: '50%',
            transform: 'translateX(-50%)', // Centramos horizontalmente
            zIndex: 1,
            
          }}
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            marginTop: '1rem', // Para que el contenido se separe de la imagen sobresaliente
            position: 'relative',
          }}
        >
          {/* Título */}
          <Typography variant="h5" fontWeight="bold">
            Contacto
          </Typography>

          {/* Icono de check */}
          <CheckCircleIcon color="success" sx={{ fontSize: 40 }} />

          {/* Segundo título */}
          <Typography variant="h6" fontWeight="bold">
            Tu mensaje fue enviado
          </Typography>

          {/* Texto */}
          <Typography variant="body1" textAlign="center">
            Un corredor de Franco Lopez se pondrá en contacto para asistirte con la venta de tu
            propiedad y responder todas tus dudas.
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export { CustomModal };
