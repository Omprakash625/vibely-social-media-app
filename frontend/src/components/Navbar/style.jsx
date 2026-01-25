import { purple } from "@mui/material/colors";

export const styles = {
  appBar: {
    borderRadius: 2,
    mt: 4,
    mb: 4,
    display: 'flex',
    flexDirection: {
      xs: 'column', // mobile
      sm: 'row',    // tablet+
    },
    justifyContent: 'space-between',
    alignItems: 'center',
    px: {
      xs: 2,
      sm: 4,
    },
    py: 1,
  },

  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: {
      xs: 'center',
      sm: 'flex-start',
    },
    width: '100%',
    mb: {
      xs: 1,
      sm: 0,
    },
  },

  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'underline',
    transition: 'color 0.3s ease',
    fontSize: {
      xs: '3rem',
      sm: '3rem',
    },
    '&:hover': {
      textDecoration: 'none',
      color: 'primary.main',
    },
  },

  image: {
    ml: {
      xs: 1,
      sm: 2,
    },
    height : {
      xs: 40,
      sm: 50,
    },
  },

  toolbar: {
    display: 'flex',
    justifyContent: {
      xs: 'center',
      sm: 'flex-end',
    },
    width: '100%',
  },

  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: {
      xs: '100%',
      sm: 400,
    },
    px: 1,
    flexDirection: {
      xs: 'column',
      sm: 'row',
    },
    gap: {
      xs: 1,
      sm: 0,
    },
  },

  userName: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: {
      xs: 'center',
      sm: 'flex-start',
    },
  },

  purple: {
    color: '#000',
    bgcolor: purple[100],
  },

  logout: {
    m: 0,
    width: {
      xs: '100%',
      sm: 'auto',
    },
  },
};

export default styles;
