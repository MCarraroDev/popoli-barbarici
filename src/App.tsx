import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, styled, createTheme } from '@mui/material';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Cartina from './pages/Cartina';

const theme = createTheme({
  palette: {
    primary: {
      main: '#283618',
      light: '#606C38',
    },
    secondary: {
      main: '#DDA15E',
      dark: '#BC6C25',
    },
    background: {
      default: '#FEFAE0',
      paper: '#FEFAE0',
    },
    text: {
      primary: '#283618',
      secondary: '#606C38',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#283618',
    },
  },
});

const AppWrapper = styled('div')({
  minHeight: '100vh',
  backgroundColor: '#FEFAE0',
});

const ContentWrapper = styled('div')({
  paddingTop: '2rem',
  paddingBottom: '2rem',
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppWrapper>
          <Navigation />
          <ContentWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cartina" element={<Cartina />} />
            </Routes>
          </ContentWrapper>
        </AppWrapper>
      </ThemeProvider>
    </Router>
  );
}

export default App;
