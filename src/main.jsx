import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/Dashboard';
import ForgotPassword from './components/Auth/ForgotPassword';
import ResetPassword from './components/Auth/ResetPassword';
import URLShortener from './components/Dashboard/URLShortener';
import URLTable from './components/Dashboard/URLTable';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './index.css';
import Activate from './components/Auth/Activate';
import ErrorBoundary from './components/ErrorBoundary';
import Container from '@mui/material/Container';
const theme = createTheme();
const localUrl = 'http://localhost:5000';
const baseUrl = import.meta.env.VITE_API_URL || localUrl;

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      
      <Router>
      <CssBaseline />
      <Container maxWidth="lg">
        <ErrorBoundary>
          <Routes>
            <Route path="*" element={<App baseUrl={baseUrl} />} />
            <Route path="/login" element={<Login baseUrl={baseUrl} />} />
            <Route path="/register" element={<Register baseUrl={baseUrl} />} />
            <Route path="/dashboard" element={<Dashboard baseUrl={baseUrl} />} />
            <Route path="/forgotpassword" element={<ForgotPassword baseUrl={baseUrl} />} />
            <Route path="/resetpassword/:token" element={<ResetPassword baseUrl={baseUrl} />} />
            <Route path="/shorten" element={<URLShortener baseUrl={baseUrl} />} />
            <Route path="/urls" element={<URLTable baseUrl={baseUrl} />} />
            <Route path="/activate/:token" element={<Activate baseUrl={baseUrl} />} />
          </Routes>
        </ErrorBoundary>
        </Container>
      </Router>
 
    </ThemeProvider>
  </React.StrictMode>
);