import React from 'react';
import MapWithPolygon from '@/components/MapWithPolygon';

const MasjidPage = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Peta Tematik Luas Area Tanam</h1>
      <div style={{ marginTop: '2rem' }}>
        <MapWithPolygon />
      </div>
    </div>
  );
};

export default MasjidPage;
