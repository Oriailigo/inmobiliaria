import React from 'react';
import { Card, CardContent, Button, Typography, Link, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff, AccountCircle } from '@mui/icons-material';

function LoginCard({ handleEmailChange, handlePasswordChange, handleLogin, handleForgotPassword, showPassword, togglePasswordVisibility }) {
  return (
    <Card sx={{ maxWidth: 400, width: '100%', padding: 2, backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: 2 }}>
      <CardContent>
        {/* Título */}
        <Typography variant="h6" align="center" gutterBottom>
          Ingresa tu email
        </Typography>

        {/* Email Input */}
        <TextField
          fullWidth
          placeholder="Email"
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
                  {showPassword ? <VisibilityOff /> : <Visibility />}
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
          sx={{ backgroundColor: 'black', color: 'white', marginTop: 2 }}
          onClick={handleLogin}
        >
          Continuar
        </Button>

        {/* Enlace Olvidé mi contraseña */}
        <Typography align="center" sx={{ marginTop: 2 }}>
          <Link href="#" onClick={handleForgotPassword}>Olvidé mi contraseña</Link>
        </Typography>

        {/* Botones de Facebook y Google */}
        <Box sx={{ marginTop: 2 }}>
          {/* Botón de Facebook */}
          <Button
            variant="contained"
            sx={{ backgroundColor: '#1877f2', color: 'white', marginBottom: 2 }}
            startIcon={<FacebookIcon />}
            fullWidth
          >
            Ingresar con Facebook
          </Button>

          {/* Botón de Google */}
          <Button
            variant="contained"
            sx={{ backgroundColor: '#db4437', color: 'white' }}
            startIcon={<GoogleIcon />}
            fullWidth
          >
            Iniciar con Google
          </Button>
        </Box>

        {/* Texto de registro */}
        <Typography variant="body2" sx={{ marginTop: 2 }} align="center">
          Si no tenés cuenta,{' '}
          <Link href="#">registrate acá</Link>
        </Typography>

        <Typography variant="body2" sx={{ marginTop: 1 }} align="center">
          Al registrarme acepto los{' '}
          <Link href="#">términos, condiciones</Link>,{' '}
          <Link href="#">y políticas de privacidad</Link>.
        </Typography>
      </CardContent>
    </Card>
  );
}

export { LoginCard };
