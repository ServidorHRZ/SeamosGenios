import React from 'react';
import { 
  Box, 
  Container, 
  TextField, 
  Button, 
  Typography, 
  Paper 
} from '@mui/material';

const Login = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper 
          elevation={3}
          sx={{
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: 2,
            width: '100%'
          }}
        >
          <div className="login-logo">SG</div>
          <Typography component="h1" variant="h5" sx={{ mb: 3, color: '#000' }}>
            Iniciar Sesión
          </Typography>
          <Box component="form" sx={{ mt: 1, width: '100%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo electrónico"
              name="email"
              autoComplete="email"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              variant="outlined"
              sx={{ mb: 3 }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: '#000',
                '&:hover': {
                  backgroundColor: '#333',
                },
                height: '48px',
                fontSize: '1.1rem'
              }}
            >
              Ingresar
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login; 