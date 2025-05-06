import React from 'react';
import { AppBar, Toolbar, Button, styled } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#283618',
});

const StyledButton = styled(Button)({
  color: '#FEFAE0',
  margin: '0 1rem',
  '&:hover': {
    backgroundColor: '#606C38',
  },
});

const Navigation: React.FC = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <StyledButton>
            Home
          </StyledButton>
        </Link>
        <NavLink to="/timeline" style={({ isActive }) => ({ textDecoration: 'none' })}>
          <StyledButton>
            Timeline
          </StyledButton>
        </NavLink>
        <Link to="/cartina" style={{ textDecoration: 'none' }}>
          <StyledButton>
            Cartina
          </StyledButton>
        </Link>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navigation;
