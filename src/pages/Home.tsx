import React from 'react';
import { Container, Box, Typography, styled } from '@mui/material';
import PopolazioneCard from '../components/PopolazioneCard';
import { popolazioni } from '../types/types';

const Title = styled(Typography)({
  color: '#283618',
  textAlign: 'center',
  margin: '2rem 0',
  fontWeight: 'bold',
  fontSize: '2.5rem',
});

const CardsContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '24px',
  padding: '24px',
});

const CardWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
});

const Home: React.FC = () => {
  return (
    <Container>
      <Title variant="h1">
        Popolazioni Barbariche nell'Impero Romano
      </Title>
      <CardsContainer>
        {popolazioni.map((pop) => (
          <CardWrapper key={pop.nome}>
            <PopolazioneCard popolazione={pop} />
          </CardWrapper>
        ))}
      </CardsContainer>
    </Container>
  );
};

export default Home;
