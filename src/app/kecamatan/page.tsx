'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

interface Kecamatan {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

// Data kecamatan
const kecamatanData: Kecamatan[] = [
  {
    id: 1,
    name: 'MELAYA',
    latitude: -8.23008,
    longitude: 114.54802,
  },
  {
    id: 2,
    name: 'NEGARA',
    latitude: -0.78927,
    longitude: 113.92133,
  },
  {
    id: 3,
    name: 'JEMBRANA',
    latitude: -8.36095,
    longitude: 114.62935,
  },
  {
    id: 4,
    name: 'MENDOYO',
    latitude: -8.31708,
    longitude: 114.76178,
  },
  {
    id: 5,
    name: 'PEKUTATAN',
    latitude: -8.41018,
    longitude: 114.88049,
  },
  {
    id: 6,
    name: 'SELEMADEG',
    latitude: -8.49159,
    longitude: 115.0457,
  },
];

const ClientSideMap = () => {
  // Create a ref for the map container
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-[500px] w-full flex items-center justify-center bg-gray-100">
        Loading map...
      </div>
    );
  }

  const MapWithNoSSR = dynamic(() => import('../../components/MapComponent'), {
    ssr: false,
    loading: () => (
      <div className="h-[500px] w-full flex items-center justify-center bg-gray-100">
        Loading map...
      </div>
    ),
  });

  return <MapWithNoSSR kecamatanData={kecamatanData} />;
};

export default function KecamatanPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Peta Kecamatan</h1>
      <ClientSideMap />
    </div>
  );
}
