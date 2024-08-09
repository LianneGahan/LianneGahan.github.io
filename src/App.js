import React, { Component } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import Funding from './pages/Funding';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrolltoTop';
import Navbar from './components/Reactive_navbar';

const dark2Theme = createTheme({
  palette: {
    primary: {
      main: '#8adeba',
    },
    secondary: {
      main: '#ffd54f',
    },
    text: {
      secondary: '#81c784',
    },
  },
  typography: {
    fontFamily: 'Merriweather Sans, sans-serif',
    h1: {
      fontSize: '2.5rem',
      '@media (min-width:600px)': {
        fontSize: '4rem',
      },
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '3rem',
      },
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h1' },
          style: {
            fontSize: '2.5rem',
            '@media (min-width:600px)': {
              fontSize: '4rem',
            },
          },
        },
        {
          props: { variant: 'h2' },
          style: {
            fontSize: '2rem',
            '@media (min-width:600px)': {
              fontSize: '3rem',
            },
          },
        },
        {
          props: { variant: 'body1' },
          style: {
            fontSize: '1rem',
          },
        },
      ],
    },
  },
});

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        <ThemeProvider theme={dark2Theme}>
          <CssBaseline />
          <Navbar />
          <Box 
            paddingBottom="1em" 
            paddingTop="1em" 
            sx={{
              minHeight: "calc(100vh - 164px)",
              backgroundColor: "#f0f4f8",
              width: "100%",
            }}
          >
            <Container maxWidth="xl">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/funding" element={<Funding />} />
                <Route path="/contact-us" element={<Contact />} />
              </Routes>
            </Container>
          </Box>
          <Footer />
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
