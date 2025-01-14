'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import ContainerPage from '@/components/Container';
import Title from '@/components/Title';

const ClientSideMap = () => {
  const [mounted, setMounted] = useState(false);
  const [masjid, setMasjid] = useState<[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fungsi untuk mengambil data masjid dari API
  const getDataMasjid = async (): Promise<[]> => {
    try {
      const response = await fetch('/api/tematic-data');
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
    return (
      <div className="h-[500px] w-full flex items-center justify-center bg-gray-100">
        Loading map...
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-[500px] w-full flex items-center justify-center bg-gray-100">
        <p>{error}</p>
      </div>
    );
  }

  const MapWithNoSSR = dynamic(
    () => import('../../../components/MapWithPolygon'),
    {
      ssr: false,
      loading: () => (
        <div className="h-[500px] w-full flex items-center justify-center bg-gray-100">
          Loading map...
        </div>
      ),
    }
  );

  return (
    <div>
      {/* Komponen Map dengan data yang sudah diambil */}
      <MapWithNoSSR data={masjid} title="" />
    </div>
  );
};

// Halaman utama yang merender ClientSideMap
export default function MasjidPage() {
  return (
    <div className="container mx-auto p-4">
      <ContainerPage>
        <Title
          title="Peta Tematik"
          title1="Masjid"
          deskripsi="Peta Total Masjid di Provinsi Bali"
        />
        <ClientSideMap />
      </ContainerPage>
    </div>
  );
}
