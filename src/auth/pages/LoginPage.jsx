import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from "@mui/icons-material"

import { AuthLayout } from '../layout'

export const LoginPage = () => {
  return (
    <AuthLayout title="Iniciar sesión">
      <form action="">
        <Grid container>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <TextField
              label="correo"
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
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>Iniciar sesión</Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}> Google </Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container
            direction="row"
            justifyContent="end"
          >
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
