import  { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';

const ForgotPassword = ({ baseUrl }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseUrl}/api/auth/forgotpassword`, { email });
      alert('Check your email for reset link');
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4" component="h1" gutterBottom>Forgot Password</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">Send Reset Link</Button>
        </form>
      </Box>
    </Container>
  );
};


ForgotPassword.propTypes = {
  baseUrl: PropTypes.string.isRequired,
};

export default ForgotPassword;