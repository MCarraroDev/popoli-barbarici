import React from 'react';
import { Card, CardContent, Typography, styled } from '@mui/material';
import { Popolazione } from '../types/types';

const StyledCard = styled(Card)(({ theme }) => ({
  margin: '1rem',
  minWidth: 275,
  maxWidth: 400,
  backgroundColor: '#FEFAE0',
  border: '2px solid #606C38',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const Title = styled(Typography)({
  fontSize: '1.5rem',
  color: '#283618',
  fontWeight: 'bold',
  marginBottom: '0.5rem',
});

const Label = styled(Typography)({
  color: '#BC6C25',
  fontWeight: 'bold',
});

const Content = styled(Typography)({
  color: '#606C38',
  marginBottom: '0.5rem',
});

interface PopolazioneCardProps {
  popolazione: Popolazione;
}

const PopolazioneCard: React.FC<PopolazioneCardProps> = ({ popolazione }) => {
  return (
    <StyledCard>
      <CardContent>
        <Title>{popolazione.nome}</Title>
        <Label>Provenienza:</Label>
        <Content>{popolazione.provenienza}</Content>
        <Label>Zona di insediamento:</Label>
        <Content>{popolazione.zonaInsediamento}</Content>
        <Label>Anni di battaglie ed eventi:</Label>
        <Content>{popolazione.anniBattaglie}</Content>
        <Label>Rapporti con l'impero:</Label>
        <Content>{popolazione.rapportiImpero}</Content>
      </CardContent>
    </StyledCard>
  );
};

export default PopolazioneCard;
