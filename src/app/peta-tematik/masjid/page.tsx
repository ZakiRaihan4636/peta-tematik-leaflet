'use client'; // Menandakan bahwa ini adalah Client Component
import React from 'react';
// import MapWithPolygon from '@/components/MapWithPolygon';
import dynamic from 'next/dynamic';

const MapWithPolygon = dynamic(() => import('@/components/MapWithPolygon'), {
  ssr: false, // Disable SSR untuk komponen ini
});

/**
 * Halaman peta tematik luas area tanam
 *
 * @returns React component yang menampilkan peta tematik
 */
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
