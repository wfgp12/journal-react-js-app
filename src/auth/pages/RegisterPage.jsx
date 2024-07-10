import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"

import { AuthLayout } from '../layout'

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta">
      <form action="">
        <Grid container>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="tu nombre"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="email@example.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
            />
          </Grid>
          <Grid container
            spacing={2}
            sx={{ mb: 2, mt: 1 }}
          >
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>Crear cuenta</Button>
            </Grid>
          </Grid>
          <Grid container
            direction="row"
            justifyContent="end"
          >
            <Typography sx={{mr:1}}>¿Ya tienes cuenta? </Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              inicia sesión
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
