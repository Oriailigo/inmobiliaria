import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Card, CardMedia, CardContent } from '@mui/material';
import './CargarPropiedad.css'; // Importamos los estilos personalizados

const CargarPropiedad = () => {
  const [files, setFiles] = useState([]); // Estado para almacenar múltiples archivos
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const newFile = {
        url: URL.createObjectURL(selectedFile),
        type: selectedFile.type.startsWith('video/') ? 'Video' : 'Imagen',
      };
      setFiles((prevFiles) => [...prevFiles, newFile]); // Agregar el nuevo archivo al estado
      setSelectedFile(null); // Limpiar el archivo seleccionado
      event.target.value = ''; // Limpiar el input para permitir la carga del mismo archivo
    }
  };

  const handleButtonClick = () => {
    document.getElementById('file-input').click(); // Simula el clic en el input de archivo
  };

  return (
    <Box className="cargar-propiedad-container">
      <Typography variant="h5" align="center" fontWeight="bold" gutterBottom>
        Cargar Propiedad
      </Typography>

      <Box className="input-grid">
        {['Nombre', 'Ubicación', 'm Terreno', 'Expensas', 'Precio', 'm Totales', 'Años de antigüedad', 'Descripción', 'm Cubiertos', 'Cocheras', 'Baños', 'Ambientes'].map((placeholder, index) => (
          <TextField key={index} placeholder={placeholder} fullWidth variant="outlined" className="input-field" />
        ))}
      </Box>

      <Box className="selection-container">
        <Typography variant="body1" color="textSecondary" className="selection-text">
          Cargar imágenes/videos:
        </Typography>
        <Typography variant="body1" color="textPrimary" className="file-count">
          {files.length} archivos cargados
        </Typography>
      </Box>

      {/* Sección para mostrar archivos cargados */}
      <Box className="media-upload-container">
        <Card className="file-upload-card">
          <CardContent>
            <Typography variant="h6" align="center">
              Seleccionar el tipo de archivo
            </Typography>
            <input
              id="file-input"
              type="file"
              accept="image/*,video/*"
              onChange={handleFileChange}
              className="file-input"
              style={{ display: 'none' }} // Ocultar el input real
            />
            <Button variant="contained" color="primary" onClick={handleButtonClick}>
              Agregar
            </Button>
          </CardContent>
        </Card>

        <Box className="media-cards">
          {files.map((file, index) => (
            <Card key={index} className="media-card">
              <CardMedia
                component={file.type === 'Video' ? 'video' : 'img'}
                src={file.url}
                controls={file.type === 'Video'}
                alt="Media"
                className="media-preview"
              />
              <CardContent>
                <Typography variant="body2" align="center">{file.type}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      <Box display="flex" justifyContent="center" mt={2}>
        <Button variant="contained" color="warning" size="large" className="finalizar-button">
          Finalizar
        </Button>
      </Box>
    </Box>
  );
};

export { CargarPropiedad };
