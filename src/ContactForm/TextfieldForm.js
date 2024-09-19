import * as React from 'react';
import TextField from '@mui/material/TextField';
import './InputForm.css';  // Importa el archivo CSS

function TextFieldc({ label }) {
  return (
    <TextField 
      label={label}  // Usa la prop `label`
      variant="outlined"
      multiline
      rows={4}
      fullWidth
      margin="normal"
      className="custom-input"  // Aplica la clase CSS
      
    />
  );
}

export { TextFieldc };
