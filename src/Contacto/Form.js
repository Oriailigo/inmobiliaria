import React from 'react';
import { Button, Box, Typography } from '@mui/material';
// Elimina la doble importación de Typography
// import Typography from '@mui/material/Typography'; 
import { Input } from '../ContactForm/InputForm';
import { BasicSelect } from '../ContactForm/SelectForm';
import { TextFieldc } from '../ContactForm/TextfieldForm';


function ContactForm() {
  return (
    <Box>
      <div className='center'>
      <Typography variant="h6">Contacto</Typography>
      <Typography variant="body2" color="textSecondary">
        Completá el formulario para contactarnos sobre cualquier pregunta o comentario que tengas y nos contactaremos a la brevedad.
      </Typography>
      </div>
      <Box component="form" noValidate autoComplete="off">
      <div className="form-container">
      <div className="input-container">
        <Input label="Nombre y Apellido*" />
        <Input label="Teléfono*" />
        <Input label="Email*" />
        <Input label="Teléfono*" /> {/* Verifica si deseas dos campos con el mismo label */}
        
        <BasicSelect label="Categoría*" />
        </div>
        <TextFieldc label="Comentarios" />
        </div>
        <div className="container-center">
        <Button variant="contained" color="info" className="btn-min">
            Enviar
          </Button>
        
        <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }} className="terms">
          Al enviar se están aceptando los Términos y Condiciones de Uso y la Política de Privacidad
        </Typography>
        </div>
      </Box>
    </Box>
  );
}

export { ContactForm };
