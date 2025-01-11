import { Link as RouterLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from "@mui/icons-material"

import { checkingAuthentication, startGoogleSignIn } from '../../store/auth'

import { AuthLayout } from '../layout'
import { useForm } from '../../hooks'

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: 'wfgp12@email.com',
    password: '123456'
  });

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(checkingAuthentication());
    console.log({ email, password })
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn())
    console.log('onGoogle Sign In')
  }

  return (
    <AuthLayout title="Iniciar sesión">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <TextField
              label="correo"
              type="email"
              placeholder="email@example.com"
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
            />
          </Grid>
          <Grid container
            spacing={2}
            sx={{ mb: 2, mt: 1 }}
          >
            <Grid item xs={12} sm={6}>
              <Button type='submit' variant="contained" fullWidth>Iniciar sesión</Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button onClick={onGoogleSignIn} variant="contained" fullWidth>
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
