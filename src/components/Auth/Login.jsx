import { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Login = ({ baseUrl }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}/api/auth/login`, { email, password });
      localStorage.setItem('token', res.data.token);
   navigate('/dashboard');
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4" component="h1" gutterBottom>Login</Typography>
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
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">Login</Button>
          <Button fullWidth  component={Link} to="/forgotpassword" variant="text"  style={{ marginTop: '10px' }}>Forgot Passward</Button>
        </form>
      </Box>
    </Container>
  );
};


Login.propTypes = {
  baseUrl: PropTypes.string.isRequired,
}; 

export default Login;