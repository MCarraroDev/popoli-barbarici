import React from 'react';
import { styled } from '@mui/material';
import { Popolazione } from '../types/types';
import { Timeline as MuiTimeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Typography, Paper } from '@mui/material';

interface TimelineProps {
  popolazioni: Popolazione[];
}

const TimelineWrapper = styled('div')({
  padding: '2rem',
  maxWidth: '800px',
  margin: '0 auto',
});

const TimelineCard = styled(Paper)(({ theme }) => ({
  padding: '1rem',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
}));

const Timeline: React.FC<TimelineProps> = ({ popolazioni }) => {
  // Ordina le popolazioni per anno di battaglia (prende il primo anno menzionato)
  const popolazioniOrdinate = [...popolazioni].sort((a, b) => {
    const annoA = parseInt(a.anniBattaglie.split(' ')[0]);
    const annoB = parseInt(b.anniBattaglie.split(' ')[0]);
    return annoA - annoB;
  });

  return (
    <TimelineWrapper>
      <Typography variant="h1" gutterBottom align="center">
        Linea del Tempo
      </Typography>
      <MuiTimeline position="alternate">
        {popolazioniOrdinate.map((pop, index) => (
          <TimelineItem key={pop.nome}>
            <TimelineSeparator>
              <TimelineDot color={index % 2 === 0 ? 'primary' : 'secondary'} />
              {index < popolazioniOrdinate.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <TimelineCard>
                <Typography variant="h6" component="h2">
                  {pop.nome}
                </Typography>
                <Typography color="textSecondary">
                  {pop.anniBattaglie}
                </Typography>
                <Typography>
                  {pop.rapportiImpero}
                </Typography>
              </TimelineCard>
            </TimelineContent>
          </TimelineItem>
        ))}
      </MuiTimeline>
    </TimelineWrapper>
  );
};

export default Timeline;
