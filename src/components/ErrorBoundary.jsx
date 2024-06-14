import { Component } from 'react';
import { Container, Typography } from '@mui/material';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container maxWidth="sm" style={{ marginTop: '50px' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Something went wrong.
          </Typography>
          <Typography variant="body1">
            {this.state.error && this.state.error.toString()}
          </Typography>
        </Container>
      );
    }

    return this.props.children;
  }
}


ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
export default ErrorBoundary;