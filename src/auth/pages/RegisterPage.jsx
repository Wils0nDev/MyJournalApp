import { Link as RouterLink } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import { TextField, Typography, Button, Link } from '@mui/material';
import {Google} from '@mui/icons-material';
import { AuthLayout } from './../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
    <form>
        <Grid container >
          <Grid item xs={12} sx={{ mt:2}}>
                <TextField
                  label="Nombre completo"
                  type="text"
                  placeholder="Tu Nombre Completo"
                  fullWidth
                />
            </Grid>
            <Grid item xs={12} sx={{ mt:2}}>
                <TextField
                  label="Correo"
                  type="email"
                  placeholder="correo@google.com"
                  fullWidth
                />
            </Grid>
            <Grid item xs={12}  sx={{ mt:2}}>
                <TextField 
                  label="Contraseña"
                  type="password"
                  placeholder="contraseña"
                  fullWidth
                />
            </Grid>

            <Grid container spacing={2} sx={{mg:2, mt:1}}
            > 
              <Grid item xs={12} >
                <Button variant="contained" fullWidth>
                  Crear cuenta
                </Button>
             
              </Grid>


              <Grid container direction='row' justifyContent='end'>
                <Typography sx={{mr:1}}>¿Ya tienes cuenta?</Typography>
                <Link  
                component={RouterLink} 
                color='inherit'
                 to="/auth/login"
                 
                 
                 >
                 ingresar
                </Link>
              </Grid>

            </Grid>
          
        </Grid>
      </form>
  </AuthLayout>
  )
}
