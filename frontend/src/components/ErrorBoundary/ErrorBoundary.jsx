import { Component } from 'react';
import { Box, Paper, Typography, Button } from '@mui/material';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box sx={{ p: 2 }}>
          <Paper sx={{ p: 2, backgroundColor: '#ffebee' }}>
            <Typography variant="h6" color="error" sx={{ mb: 1 }}>
              Oops! Something went wrong
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: '#c62828' }}>
              {this.state.error?.message}
            </Typography>
            <Button
              variant="contained"
              color="error"
              onClick={() => this.setState({ hasError: false, error: null })}
            >
              Try again
            </Button>
          </Paper>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
