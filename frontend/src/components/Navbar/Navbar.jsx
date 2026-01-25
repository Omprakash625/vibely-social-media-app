import { AppBar,Avatar, Toolbar, Typography, Button } from "@mui/material";
import styles from './style.jsx'
import logo from '../../assets/images/logo.png'
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/auth.jsx";
import { useEffect } from "react";
import { jwtDecode as decode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
    window.location.reload();
  };

  useEffect(() => {
    const profile = localStorage.getItem('profile');
    if (profile) {
      const token = JSON.parse(profile).token;
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
  }, []);

  return (
    <>
      <AppBar sx={styles.appBar} position="static" color="inherit">
        <Box sx={styles.brandContainer}>
        <Typography sx={styles.heading} component={Link} to="/" variant="h2" align="center">
          Vibely
        </Typography>
        <img style={styles.image} src={logo} alt="Vibely" height="60" />
        </Box>
        <Toolbar sx={styles.toolbar}>
          { user ? (
            <Box sx={styles.profile}>
              <Avatar sx={styles.purple} alt={user.name} src={user.picture}>{user.name.charAt(0)}</Avatar>
              <Typography sx={styles.userName} variant="h6">{user.name}</Typography>
              <Button variant="contained" sx={styles.logout} color="secondary" onClick={handleLogout}>Logout</Button>
            </Box>
          ) : (
            <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
          ) }
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
