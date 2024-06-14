import  { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';

const ResetPassword = ({ baseUrl }) => {
  const [password, setPassword] = useState('');
  const { token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseUrl}/api/auth/resetpassword/${token}`, { password });
      alert('Password reset successfully');
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <Container  sx={{ mt: 3 }} maxWidth="xs">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4" component="h1" gutterBottom>Reset Password</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="New Password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">Reset Password</Button>
        </form>
      </Box>
    </Container>
  );
};

ResetPassword.propTypes = {
  baseUrl: PropTypes.string.isRequired,
}; 

export default ResetPassword;