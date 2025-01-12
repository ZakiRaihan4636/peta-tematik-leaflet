'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import ContainerPage from '@/components/Container';

interface LocationData {
  id: number;
  name: string;
  totalPopulation: number;
  totalHospital: number;
  totalMosque: number;
  totalPrivateCollege: number;
  totalTourism: number;
  totalTouristDestination: number;
  polygons: number[][][];
}

const ClientSideMap = () => {
  const [mounted, setMounted] = useState(false);
  const [masjid, setMasjid] = useState<LocationData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fungsi untuk mengambil data masjid dari API
  const getDataMasjid = async (): Promise<LocationData[]> => {
    try {
      const response = await fetch('http://localhost:3000/api/tematic-data');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseData = await response.json();
      return responseData.data;
    } catch (error) {
      console.error('Error fetching masjid data:', error);
      setError('Error fetching masjid data');
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const masjidData = await getDataMasjid();
        setMasjid(masjidData);
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

  const MapWithNoSSR = dynamic(() => import('../../../components/MapWithPolygon'), {
    ssr: false,
    loading: () => <div className="h-[500px] w-full flex items-center justify-center bg-gray-100">Loading map...</div>,
  });

  return (
    <div>
      {/* Komponen Map dengan data yang sudah diambil */}
      <MapWithNoSSR data={masjid} title={'Peta Total Masjid di Provinsi Bali'} />
    </div>
  );
};

// Halaman utama yang merender ClientSideMap
export default function MasjidPage() {
  return (
    <div className="container mx-auto p-4">
      <ContainerPage>
        <ClientSideMap />
      </ContainerPage>
    </div>
  );
}
