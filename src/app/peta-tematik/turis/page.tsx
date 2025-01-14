'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import ContainerPage from '@/components/Container';
import Title from '@/components/Title';

const ClientSideMap = () => {
  const [mounted, setMounted] = useState(false);
  const [turis, setturis] = useState<[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fungsi untuk mengambil data rumah dari API
  const getDataTuris = async (): Promise<[]> => {
    try {
      const response = await fetch('/api/tematic-data');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseData = await response.json();
      return responseData.data;
    } catch (error) {
      console.error('Error fetching rumah data:', error);
      setError('Error fetching rumah data');
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const turisData = await getDataTuris();
        setturis(turisData);
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

  const MapWithNoSSR = dynamic(() => import('./MapPolygon'), {
    ssr: false,
    loading: () => <div className="h-[500px] w-full flex items-center justify-center bg-gray-100">Loading map...</div>,
  });

  return (
    <div>
      {/* Komponen Map dengan data yang sudah diambil */}
      <MapWithNoSSR data={turis} />
    </div>
  );
};

// Halaman utama yang merender ClientSideMap
export default function TurisPage() {
  return (
    <div className="container mx-auto p-4">
      <ContainerPage>
        <Title title="Peta Tematik" title1="Turis" deskripsi="Peta Total Turis di Provinsi Bali" />
        <ClientSideMap />
      </ContainerPage>
    </div>
  );
}
