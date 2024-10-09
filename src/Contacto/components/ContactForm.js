import React, { useState }  from 'react';
import { Card, CardContent, Button, Typography, TextField, Link, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import {CustomModal} from './Modal'; // Importa el modal personalizado
function ContactForm() {
  const [category, setCategory] = React.useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Formulario enviado');
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  return (
    <Card sx={{ maxWidth: 500, width: '100%', padding: 3, backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: 2 }}>
      <CardContent sx={{ display:'flex', alignItems:'center', flexDirection:'column' }}>
        {/* Título */}
        <Typography variant="h6" align="center" gutterBottom sx={{fontWeight:'bold'}}>
          Contacto
        </Typography>
        
        {/* Descripción */}
        <Typography variant="body2" align="center" color="textSecondary" gutterBottom>
          Completa el formulario para contactarnos sobre cualquier pregunta o comentario que tengas y nos conectaremos a la brevedad.
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

        {/* Categoría */}
        <FormControl fullWidth margin="normal">
          <InputLabel id="category-label">Categoría</InputLabel>
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
        <div>
          <Button
            fullWidth
            variant="contained"
            sx={{ backgroundColor: '#FFD466', color: 'gray', marginTop: 2 }}
           
            onClick={handleOpenModal}
          >
            Enviar
          </Button>
          <CustomModal open={isModalOpen} onClose={handleCloseModal} />
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
