import React from 'react';
// Elimina la doble importación de Typography
// import Typography from '@mui/material/Typography'; 
import { Input } from '../../../ContactForm/InputForm';
import { BasicSelect } from '../../../ContactForm/SelectForm';
import { TextFieldc } from '../../../ContactForm/TextfieldForm';


import { Card, CardContent, Button, Typography, TextField, Link } from '@mui/material';

function ContactForm() {
  
  return (
    <Card sx={{ maxWidth: 500, width: '100%', padding: 3, backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: 2 }}>
      <CardContent sx={{ display:'flex', alignItems:'center', flexDirection:'column' }}>
        {/* Título */}
        <Typography variant="h6" align="center" gutterBottom sx={{fontWeight:'bold'}}>
          Contacto
        </Typography>
        

        {/* Nombre y Apellido */}
        <TextField
          required
          fullWidth
          label="Nombre y Apellido"
          placeholder="Ingrese su nombre completo"
          margin="normal"
          variant="outlined"
          color="textSecondary"
        />

        {/* Teléfono */}
        <TextField
          required
          fullWidth
          label="Teléfono"
          placeholder="Ingrese su número de teléfono"
          margin="normal"
          variant="outlined"
        />

        {/* Email */}
        <TextField
          required
          fullWidth
          label="Email"
          placeholder="Ingrese su correo electrónico"
          margin="normal"
          variant="outlined"
        />

        {/* Segundo Teléfono */}
        <TextField
          fullWidth
          label="Teléfono"
          placeholder="Ingrese un segundo número de teléfono (opcional)"
          margin="normal"
          variant="outlined"
        />

        

        {/* Comentarios */}
        <TextField
          fullWidth
          label="Mensaje"
          placeholder="Mensaje"
          multiline
          rows={4}
          margin="normal"
          variant="outlined"
        />

        {/* Botón de enviar */}
        <div>
          <Button
            fullWidth
            variant="contained"
            sx={{ backgroundColor: '#FFD466', color: 'gray', marginTop: 2 }}
           
          
          >
            Enviar
          </Button>
          
        </div>
        {/* Términos y condiciones */}
        <Typography variant="body2" align="center" color="textSecondary" sx={{ marginTop: 2, fontWeight:'bold',color:'black' }} >
          Al enviar se estan aceptando los {' '}
          <Link href="#" sx={{fontWeight:'bold',color:'black'}}>Términos y Condiciones de Uso y la Politica de Privacidad</Link>.
        </Typography>
      </CardContent>
    </Card>
  );
}

export { ContactForm };

