import React from 'react';
import { Card, CardContent, Button, Typography, TextField, Link, Box, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

function ContactForm() {
  const [category, setCategory] = React.useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Formulario enviado');
  };

  return (
    <Card sx={{ maxWidth: 500, width: '100%', padding: 3, backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: 2 }}>
      <CardContent sx={{ display:'flex', alignItems:'center' }}>
        {/* Título */}
        <Typography variant="h6" align="center" gutterBottom>
          Contacto
        </Typography>
        
        {/* Descripción */}
        <Typography variant="body2" align="center" color="textSecondary" gutterBottom>
          Por favor completa el formulario con tus datos para que podamos contactarte.
        </Typography>

        {/* Nombre y Apellido */}
        <TextField
          fullWidth
          label="Nombre y Apellido*"
          placeholder="Ingrese su nombre completo"
          margin="normal"
          variant="outlined"
        />

        {/* Teléfono */}
        <TextField
          fullWidth
          label="Teléfono*"
          placeholder="Ingrese su número de teléfono"
          margin="normal"
          variant="outlined"
        />

        {/* Email */}
        <TextField
          fullWidth
          label="Email*"
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

        {/* Categoría */}
        <FormControl fullWidth margin="normal">
          <InputLabel id="category-label">Categoría*</InputLabel>
          <Select
            labelId="category-label"
            value={category}
            onChange={handleCategoryChange}
            label="Categoría*"
          >
            <MenuItem value="consulta">Consulta</MenuItem>
            <MenuItem value="soporte">Soporte</MenuItem>
            <MenuItem value="otro">Otro</MenuItem>
          </Select>
        </FormControl>

        {/* Comentarios */}
        <TextField
          fullWidth
          label="Comentarios"
          placeholder="Escriba sus comentarios aquí"
          multiline
          rows={4}
          margin="normal"
          variant="outlined"
        />

        {/* Botón de enviar */}
        <Button
          fullWidth
          variant="contained"
          sx={{ backgroundColor: 'black', color: 'white', marginTop: 2 }}
          onClick={handleSubmit}
        >
          Enviar
        </Button>

        {/* Términos y condiciones */}
        <Typography variant="body2" align="center" color="textSecondary" sx={{ marginTop: 2 }}>
          Al enviar este formulario aceptas nuestros{' '}
          <Link href="#">términos y condiciones</Link>.
        </Typography>
      </CardContent>
    </Card>
  );
}

export { ContactForm };
