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
  const [kabupaten, setKabupaten] = useState<LocationData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getDataKabupaten = async (): Promise<LocationData[]> => {
    try {
      const response = await fetch('http://localhost:3000/api/regencies'); // Replace with your API endpoint for Kabupaten
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseData = await response.json();
      return responseData.data;
    } catch (error) {
      console.error('Error fetching kabupaten data:', error);
      setError('Error fetching kabupaten data');
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const kabupatenData = await getDataKabupaten();
        setKabupaten(kabupatenData);
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
      <MapWithNoSSR data={kabupaten} title="Peta Kabupaten" />
    </div>
  );
};

export default function KabupatenPage() {
  return (
    <div className="container mx-auto p-4">
      <ContainerPage>
        <ClientSideMap />
      </ContainerPage>
    </div>
  );
}
