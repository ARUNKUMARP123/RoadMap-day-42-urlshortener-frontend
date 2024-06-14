import { Link } from 'react-router-dom';
import { Container, Box, Button, Typography, Grid } from '@mui/material';

const App = () => {
  return (
    <Container maxWidth="sm" >
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Typography variant="h4" component="h1" gutterBottom>Welcome to the URL Shortener App</Typography>
        <Grid container  display={"flex"} justifyContent={"space-between"} flexDirection={"column"}>
        <Grid item> <img width={"100%"} style={{borderRadius:"5px",height:"300px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFpx3TrkKz4BaAMWgwr4O0_LZJEiMt7DALMg&s'/></Grid>
        <Grid item width={"100%"} display={"flex"} justifyContent={"flex-end"} >
        <Button style={{width:"50%"}} component={Link} to="/login" variant="contained" color="primary">Login</Button>
        <Button component={Link} to="/register" variant="contained" color="secondary" style={{  width:"50%",marginLeft:"10px"}}>Register</Button>
        </Grid>
       
        </Grid>
       
        
      </Box>
    </Container>
  );
};

export default App;