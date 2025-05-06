import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Popolazione } from '../types/types';
import { styled } from '@mui/material';

const MapWrapper = styled('div')({
  height: '600px',
  width: '100%',
  margin: '2rem 0',
  border: '2px solid #606C38',
  borderRadius: '8px',
  overflow: 'hidden',
});

const StyledPopup = styled(Popup)({
  '& .leaflet-popup-content-wrapper': {
    backgroundColor: '#FEFAE0',
    color: '#283618',
  },
  '& .leaflet-popup-tip': {
    backgroundColor: '#FEFAE0',
  },
});

interface MappaProps {
  popolazioni: Popolazione[];
}

const Mappa: React.FC<MappaProps> = ({ popolazioni }) => {
  useEffect(() => {
    // Fix for the marker icon in React
    const L = require('leaflet');
    delete (L.Icon as any).Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    });
  }, []);

  return (
    <MapWrapper>
      <MapContainer
        center={[45, 10]}
        zoom={5}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {popolazioni.map((pop) => (
          <Marker
            key={pop.nome}
            position={pop.coordinate}
          >
            <StyledPopup>
              <h3>{pop.nome}</h3>
              <p><strong>Zona:</strong> {pop.zonaInsediamento}</p>
              <p><strong>Provenienza:</strong> {pop.provenienza}</p>
            </StyledPopup>
          </Marker>
        ))}
      </MapContainer>
    </MapWrapper>
  );
};

export default Mappa;
