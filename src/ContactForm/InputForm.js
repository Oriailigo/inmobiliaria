import * as React from 'react';
import TextField from '@mui/material/TextField';
import './InputForm.css';  // Importa el archivo CSS

function Input({ label }) {
  return (
    <TextField 
      label={label}  // Usa la prop `label`
      variant="outlined"
      className="custom-input"  // Aplica la clase CSS
      size="small"
      margin="normal"
    />
  );
}

export { Input };
