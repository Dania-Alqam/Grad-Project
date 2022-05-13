import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BackgroundHeader from './images/Capture.PNG';
import LoginIcon from '@mui/icons-material/Login';
import axios from 'axios';
import { useEffect,useState } from "react";
import validator from 'validator';

function Copyright(props) {

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        BzuSociety
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
document.dir = 'rtl';

const theme = createTheme();

export default function SignInSide() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('')
    } else {
      setEmailError('.. Enter valid Email')
    }
  }
  

useEffect(() => {
  console.log(email);
  console.log(password);
})

  const login=()=>{
    // if (isEmail(Email)) {
    //    sweetALert.
    // }
    axios.post("http://localhost:3002/login",{
      email:email, 
      password:password,
    }).then((response)=> {
      console.log(response);
    }); 
};

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url('+ BackgroundHeader+')',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#21b6ae' }}>
              <LoginIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                أهلًا وسهلًا
</Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="البريد الإلكتروني"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                // onChange={(e) => validateEmail(e)}
      
                onChange={e => { setEmail(e.target.value);   validateEmail(e) }}
              />
               <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{emailError}</span>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="كلمة المرور"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="تذكرني"
              />
              <Button
               style={{
                borderRadius: 35,
                backgroundColor: "#21b6ae",
                padding: "10px 20px",
                fontSize: "12px"
            }}
                type="submit"

                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                // href="pages/profile/Profile"
                onClick={login}
              >
               تسجيل الدخول
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link  href="#" variant="body2">
                   هل نسيت كلمة المرور ؟
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link href="./Register" variant="body2">
                    {"ليس لديك حساب بعد ؟ أنشئ حسابًا"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}