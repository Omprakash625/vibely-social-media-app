import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@mui/material";

import { useEffect, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { googleLogin, signin, signup } from "../../actions/auth"; // import the Redux thunk
import { useNavigate } from "react-router-dom";
import styles from "./style.jsx";
import Input from "./Input.jsx";


const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state) => state.auth);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(isSignup) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
  };

  const handleChange = (e) => {
    // implement controlled inputs later
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const googleSuccess = async (res) => {
    try {
      // Decode the credential token to inspect user info (optional)
      const result = jwtDecode(res?.credential);
      const token = res?.credential;

      // Dispatch the Redux thunk to store user in backend + Redux state
      dispatch(googleLogin(token));
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  const switchMode = () => {
    setIsSignup(!isSignup);
    setShowPassword(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper sx={styles.paper} elevation={3}>
        <Avatar sx={styles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography sx={styles.heading} variant="h5">
          {isSignup ? "Sign Up" : "Sign In"}
        </Typography>
        <form sx={styles.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={styles.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>

          <GoogleLogin
            className="sign"
            onSuccess={googleSuccess}
            onError={() => {
              console.log("Login Failed");
            }}
          />

          {loading && <Typography>Logging in...</Typography>}
          {error && <Typography color="error">{error}</Typography>}
          {user && <Typography>Welcome, {user.name}!</Typography>}

          <Grid container justifyContent="flex-end">
            <Grid>
              {isSignup ? "Already have an account?" : "Don't have an account?"}
              <Button onClick={switchMode}>
                {isSignup ? "Sign In" : "Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
