import React, { FC } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { useStyles } from 'features/auth/style';

export const RecoveryPassword: FC = () => {
  const classes = useStyles();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>();

  const onSubmit: SubmitHandler<{ email: string }> = data => {
    console.log(data);
    console.log(errors.email);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Forgot your password? Enter your email and we will send you a link to restore
          your password.
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

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Forgot password
          </Button>
          <Grid container className={classes.links}>
            <Grid item xs>
              <Link to="/login">Sign In</Link>
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
