export const styles = {
  media: {
    height: 0,
    paddingTop: '66.66%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: '1px solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: (theme) => theme.shape.borderRadius,
    height: '100%',
    position: 'relative',
    boxShadow: (theme) => theme.shadows[3],
    transition: (theme) => theme.transitions.create(['box-shadow'], {
      duration: theme.transitions.duration.shorter,
    }),
    '&:hover': {
      boxShadow: (theme) => theme.shadows[12],
    },
  },
  overlay: {
    position: 'absolute',
    top: (theme) => theme.spacing(1.5),
    left: (theme) => theme.spacing(1.5),
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: (theme) => theme.spacing(0.75, 1),
    borderRadius: (theme) => theme.shape.borderRadius,
    '& .MuiTypography-h6': {
      fontSize: '0.9rem',
      fontWeight: 600,
    },
    '& .MuiTypography-body2': {
      fontSize: '0.75rem',
    },
  },
  overlay2: {
    position: 'absolute',
    top: (theme) => theme.spacing(2.5),
    right: (theme) => theme.spacing(2.5),
    color: 'white',
  },
  grid: {
    // Reserved for grid layout styles
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: (theme) => theme.spacing(1.5, 1.5),
    gap: (theme) => theme.spacing(0.5),
  },
  title: {
    padding: (theme) => theme.spacing(0, 1),
    fontWeight: 600,
    fontSize: '1.25rem',
  },
  message: {
    fontSize: '1rem',
    fontWeight: 400,
  },
  cardActions: {
    padding: (theme) => theme.spacing(0.75, 1.5),
    display: 'flex',
    justifyContent: 'space-between',
    gap: (theme) => theme.spacing(0.5),
  },
};

export default styles;