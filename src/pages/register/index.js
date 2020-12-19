import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import { authService } from '../../services';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => {
  return {
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  };
});

export default function SignUp() {
  const classes = useStyles();
  const history = useHistory();
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstNameChange = (event) => {
    console.log(event.target.value);
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    console.log(event.target.value);
    setLastName(event.target.value);
  };
  const handlePasswordChange = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };
  const handleUsernameChange = (event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };
  const onSubmitRegister = () => {
    console.log('hello');
    authService
      .registerAdmin(
        `${firstname} ${lastname}`,
        username,
        'sistem@gmail.com',
        '1999-10-11',
        'male',
        'Jakarta',
        'Jakarta Timur',
        'Jl. kenangan',
        password,
        '0813124567'
      )
      .then((res) => {
        console.log(res, 'line 16');
        history.push('/home');
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // setLoginLoading(false);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onSubmitRegister();
          }}
          className={classes.form}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={firstname}
                onChange={handleFirstNameChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lastname}
                onChange={handleLastNameChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={username}
                onChange={handleUsernameChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
