import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';

const Register = ({ baseUrl }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseUrl}/api/auth/register`, { firstName, lastName, email, password });
     alert("Check your mail and click the Activation link.")
      navigate('/login');
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4" component="h1" gutterBottom>Register</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            fullWidth
            margin="normal"
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            label="Last Name"
            fullWidth
            margin="normal"
            variant="outlined"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
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
          <Button type="submit" fullWidth variant="contained" color="primary">Register</Button>
        </form>
      </Box>
    </Container>
  );
};


Register.propTypes = {
  baseUrl: PropTypes.string.isRequired,
}; 

export default Register;