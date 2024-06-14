import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, CircularProgress } from '@mui/material';

const URLTable = ({ baseUrl, refreshFlag }) => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setUrls("");
    const fetchUrls = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No token found. Please log in.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${baseUrl}/api/url`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUrls(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        setError(err.response?.data?.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchUrls();
  }, [baseUrl, refreshFlag]);  // Fetch URLs again when refreshFlag changes


  const handleRedirect = async (urlCode) => {
    try {
      await axios.get(`${baseUrl}/api/url/${urlCode}`);
    } catch (err) {
      console.error(err.response?.data?.message || 'An error occurred');
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Original URL</TableCell>
            <TableCell>Shortened URL</TableCell>
            <TableCell>Clicks</TableCell>
            <TableCell>Date Created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {urls.length > 0 ? (
            urls.map((url) => (
              <TableRow key={url._id}>
                <TableCell>{url.longUrl}</TableCell>
                <TableCell>
                  <a href={url.longUrl} target='_parent' onClick={() => handleRedirect(url.urlCode)}>
                    {url.shortUrl}
                  </a>
                </TableCell>
                <TableCell>{url.clicks}</TableCell>
                <TableCell>{new Date(url.date).toLocaleString()}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} align="center">
                No URLs found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

URLTable.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  refreshFlag: PropTypes.bool.isRequired,
};

export default URLTable;