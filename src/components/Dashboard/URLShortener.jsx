import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const URLShortener = ({ baseUrl, onShorten }) => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  useEffect(() => {
    setLongUrl('');
    setShortUrl('');
  }, [baseUrl]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const res = await axios.post(`${baseUrl}/api/url/shorten`, { longUrl }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setShortUrl(res.data.shortUrl);
      onShorten();  // Trigger refresh in URLTable
    } catch (error) {
      console.error(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <Container  sx={{ mt: 3 }} maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4" component="h1" gutterBottom>URL Shortener</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Enter URL"
            fullWidth
            margin="normal"
            variant="outlined"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">Shorten URL</Button>
        </form>
        {shortUrl && (
          <Box mt={2}>
            <Typography variant="body1">Short URL:{shortUrl}</Typography>
           
          </Box>
        )}
      </Box>
    </Container>
  );
};

URLShortener.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  onShorten: PropTypes.func.isRequired,
};

export default URLShortener;