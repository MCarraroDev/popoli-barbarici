import React from 'react';
import { Container, Typography, styled } from '@mui/material';
import Mappa from '../components/Mappa';
import { popolazioni } from '../types/types';

const Title = styled(Typography)({
  color: '#283618',
  textAlign: 'center',
  margin: '2rem 0',
  fontWeight: 'bold',
  fontSize: '2.5rem',
});

const Cartina: React.FC = () => {
  return (
    <Container>
      <Title variant="h1">
        Mappa degli Insediamenti
      </Title>
      <Mappa popolazioni={popolazioni} />
    </Container>
  );
};

export default Cartina;
