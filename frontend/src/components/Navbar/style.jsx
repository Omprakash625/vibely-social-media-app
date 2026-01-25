import { purple } from "@mui/material/colors";

export const styles = {
    appBar: {
    borderRadius: 5,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 30px',
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
    transition: 'color 0.3s ease', // Smooth transition
    '&:hover': {
      textDecoration: 'none', // Ensures it stays none on hover
      color: 'primary.second', // Changes color on hover
    }
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    padding: '0 10px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: '#000',
    backgroundColor: purple[100],
  },
  logout: {
    margin: 0,
  },
}

export default styles;