import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useStyles } from "./styles";
import clsx from "clsx";

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <img
            src="https://iconarchive.com/download/i58806/dakirby309/windows-8-metro/Web-Dell-alt-Metro.ico"
            width="45"
          />
        </Avatar>
        <Typography component="h1" variant="h5">
          SIGN IN
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            color="primary"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            color="primary"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={
              <Checkbox
                style={{
                  color: "primary",
                }}
                value="remember"
                color="primary"
              />
            }
            label="Remember me"
          />
          <Button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "http://192.168.100.15:8080";
            }}
            type="submit"
            fontWeight="900"
            fullWidth
            variant="contained"
            color="primary"
            className={clsx(classes.submit, classes.button)}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link
                href="#"
                style={{
                  color: "primary",
                }}
                variant="body2"
              >
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
