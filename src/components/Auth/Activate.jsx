import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Box, Typography, CircularProgress, Alert, Button } from '@mui/material';

const Activate = ({ baseUrl }) => {
  const { token } = useParams();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(''); // Initialize message as an empty string
  const navigate = useNavigate();

  useEffect(() => {
    const activateAccount = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/auth/activate/${token}`);
        setMessage(response.data.message);
      } catch (error) {
        setMessage(error.response?.data?.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };
    activateAccount();
  }, [token, baseUrl]);

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <Typography variant="h4" component="h1" gutterBottom>
              Account Activation
            </Typography>
            <Alert severity={message.includes('Account activated') ? 'success' : 'error'}>
              {message}
            </Alert>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate('/login')}
              style={{ marginTop: '10px' }}
            >
              Go to Login
            </Button>
          </>
        )}
      </Box>
    </Container>
  );
};

Activate.propTypes = {
  baseUrl: PropTypes.string.isRequired,
};

export default Activate;