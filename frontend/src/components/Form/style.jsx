export const styles = {
  root: {
    '& .MuiTextField-root': {
      margin: '8px',
    },
  },
  paper: {
    padding: '16px',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  textField: {
    margin: '8px 0',
  },
  button: {
    margin: '5px 0',
  },
  imagePreview: {
  display: 'inline-block',
  borderRadius: 4,
  border: '1px solid #ccc',
  overflow: 'visible',          // allow the image to overflow if needed
  maxWidth: '90vw',             // optional, prevent huge images
  maxHeight: '80vh',
  '& img': {
    width: 'auto',              // original width
    height: 'auto',             // original height
    display: 'block',
    objectFit: 'contain',       // preserve aspect ratio
    maxWidth: '100%',           // scale down if parent is smaller
    maxHeight: '100%',          // scale down if parent is smaller
  },
  '&:hover': {
    overflow: 'visible',        // ensure overflow on hover as well
    transform : 'scale(1.05)',   // slight zoom on hover
    transition: 'transform 0.3s ease-in-out'
  },
}
};

export default styles;