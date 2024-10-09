import React from 'react';
import { Card, CardContent, Button, Typography, Link, Box } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff, AccountCircle } from '@mui/icons-material';

function LoginCard({ handleEmailChange, handlePasswordChange, handleLogin, handleForgotPassword, showPassword, togglePasswordVisibility }) {
  return (
    <Card sx={{ maxWidth: 400, width: '100%', padding: 2, backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: 2 }}>
      <CardContent>
        {/* Título */}
        <Typography variant="h6" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          Ingresa tu email
        </Typography>

        {/* Nombre y Apellido Input */}
        <TextField
          required
          fullWidth
          placeholder="Nombre y Apellido"
          sx={{ fontWeight: 'bold', border: '1px solid black', borderRadius: '10px' }}
          margin="normal"
          variant="outlined"
          onChange={(e) => console.log(e.target.value)} // Cambia esto según la función que uses para manejar el cambio
        />

        {/* Email Input */}
        <TextField
          required
          fullWidth
          placeholder="Email"
          sx={{ fontWeight: 'bold', border: '1px solid black', borderRadius: '10px' }}
          margin="normal"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          onChange={handleEmailChange}
        />

        {/* Password Input */}
        <TextField
        required
        fullWidth
        placeholder="Contraseña"
        margin="normal"
        variant="outlined"
        type={showPassword ? 'text' : 'password'}  
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        onChange={handlePasswordChange}
      />

        {/* Botón Continuar */}
        <Button
          fullWidth
          variant="contained"
          sx={{ backgroundColor: '#414141', color: 'white', marginTop: 2, marginTop: '2rem', marginBottom: '4rem' }}
          onClick={handleLogin}
        >
          Continuar
        </Button>

        {/* Botones de Google */}
        <Box sx={{ marginTop: 2 }}>
          {/* Botón de Google */}
          <Button
            variant="contained"
            sx={{ backgroundColor: 'white', color: 'black', border: '1px solid black' }}
            startIcon={<GoogleIcon />}
            fullWidth
          >
            Iniciar con Google
          </Button>
        </Box>

        {/* Texto de registro */}
        <Typography variant="body2" sx={{ marginTop: 2 }} align="center">
          Si ya tenés cuenta,{' '}
          <Link href="/iniciar-sesion" sx={{ textDecoration: 'none', color: 'black' }}>inicia sesión</Link>
        </Typography>

        <Typography variant="body2" sx={{ marginTop: '2rem' }} align="center">
          Al registrarme acepto los{' '}
          <Link href="#" sx={{ color: 'black' }}>términos, condiciones</Link>,{' '}
          <Link href="#" sx={{ color: 'black' }}>y políticas de privacidad</Link>.
        </Typography>
      </CardContent>
    </Card>
  );
}

export { LoginCard };
