import { useState } from 'react';
import URLShortener from './URLShortener';
import URLTable from './URLTable';
import { Container, Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';

const Dashboard = ({baseUrl}) => {
    const [refreshFlag, setRefreshFlag] = useState(false);

  // Function to trigger a refresh in URLTable
  const handleRefresh = () => {
    setRefreshFlag(prevFlag => !prevFlag);
  };
  return (
    <Container maxWidth="lg">
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Typography variant="h4" component="h1" gutterBottom>Dashboard</Typography>
        <URLShortener baseUrl={baseUrl} onShorten={handleRefresh} />
        <URLTable  baseUrl={baseUrl} refreshFlag={refreshFlag} />
      </Box>
    </Container>
  );
};


Dashboard.propTypes = {
    baseUrl: PropTypes.string.isRequired,
  };

export default Dashboard;