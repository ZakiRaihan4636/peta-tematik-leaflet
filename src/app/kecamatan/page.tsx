'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import ContainerPage from '@/components/Container';

interface LocationData {
  id: number;
  alt_name: string;
  latitude: number;
  longitude: number;
}

const ClientSideMap = () => {
  const [mounted, setMounted] = useState(false);
  const [kecamatan, setKecamatan] = useState<LocationData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getDataKecamatan = async (): Promise<LocationData[]> => {
    try {
      const response = await fetch('http://localhost:3000/api/districts'); // API endpoint untuk Kecamatan
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseData = await response.json();
      return responseData.data; // Asumsikan data ada di "data"
    } catch (error) {
      console.error('Error fetching kecamatan data:', error);
      setError('Error fetching kecamatan data');
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const kecamatanData = await getDataKecamatan();
        setKecamatan(kecamatanData);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || loading) {
    return <div className="h-[500px] w-full flex items-center justify-center bg-gray-100">Loading map...</div>;
  }

  if (error) {
    return (
      <div className="h-[500px] w-full flex items-center justify-center bg-gray-100">
        <p>{error}</p>
      </div>
    );
  }

  const MapWithNoSSR = dynamic(() => import('../../components/MapComponent'), {
    ssr: false,
    loading: () => <div className="h-[500px] w-full flex items-center justify-center bg-gray-100">Loading map...</div>,
  });

  return (
    <div>
      <MapWithNoSSR data={kecamatan} title="Peta Kecamatan" />
    </div>
  );
};

export default function KecamatanPage() {
  return (
    <div className="container mx-auto p-4">
      <ContainerPage>
        <ClientSideMap />
      </ContainerPage>
    </div>
  );
}
