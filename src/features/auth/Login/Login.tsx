import React from 'react';

import { Box } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { RequestLoginType } from 'dal/types';
import { useStyles } from 'features/auth/style';
import { login } from 'redux/middleware/login';

export const Login = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestLoginType>();

  const onSubmit: SubmitHandler<RequestLoginType> = data => {
    dispatch(login(data));
    console.log(errors.password);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            {...register('email', { required: true })}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            {...register('password', { required: true })}
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <Box className={classes.checkbox}>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Remember me"
            />
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/forgot">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link to="/signup">Dont have an account? Sign Up</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
