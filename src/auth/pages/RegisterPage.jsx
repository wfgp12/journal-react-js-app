import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"

import { AuthLayout } from '../layout'
import { useForm } from '../../hooks/useForm';
import { startCreatingUserWhitEmailPassword } from '../../store/auth';

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [(value) => value.includes('@'), 'Ingrese un email valido'],
  password: [(value) => value.length >= 6, 'La contraseña debe tener al 6 caracteres'],
  displayName: [(value) => value.length >= 1, 'El nombre es requerido'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector(state => state.auth);

  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;

    dispatch(startCreatingUserWhitEmailPassword(formState))
  }

  return (
    <AuthLayout title="Crear cuenta">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <TextField
              label="Nombre completo"
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              type="text"
              placeholder="tu nombre"
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <TextField
              label="Correo"
              name='email'
              value={email}
              onChange={onInputChange}
              type="email"
              placeholder="email@example.com"
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <TextField
              label="Contraseña"
              name='password'
              value={password}
              onChange={onInputChange}
              type="password"
              placeholder="contraseña"
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
              fullWidth
            />
          </Grid>
          <Grid container
            spacing={2}
            sx={{ mb: 2, mt: 1 }}
          >
            <Grid item xs={12} display={errorMessage ? '' : 'none'}>
             <Alert severity='error'>
               {errorMessage}
             </Alert>
            </Grid>
            <Grid item xs={12}>
              <Button
                disabled={isCheckingAuthentication}
                type='submit'
                variant="contained"
                fullWidth
              >
                Crear cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container
            direction="row"
            justifyContent="end"
          >
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta? </Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              inicia sesión
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
