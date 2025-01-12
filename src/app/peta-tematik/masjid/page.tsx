'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import ContainerPage from '@/components/Container';

const staticGeoJSON = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: 'Provinsi Bali',
        value: 4200000, // Contoh populasi atau nilai lainnya
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [114.4304, -8.7502], // Barat laut
            [114.798, -8.8909], // Barat daya
            [115.2069, -8.9303], // Selatan
            [115.6682, -8.5006], // Timur
            [115.3188, -8.2706], // Utara
            [114.895, -8.2761], // Barat laut
            [114.4304, -8.7502], // Tutup poligon
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Provinsi Jawa Timur',
        value: 40000000, // Contoh populasi atau nilai lainnya
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [111.5432, -8.3052], // Barat daya
            [112.0535, -8.2231], // Selatan
            [114.0313, -8.0689], // Timur
            [114.3688, -7.6718], // Timur laut
            [112.9011, -6.9515], // Utara
            [111.875, -7.6535], // Barat laut
            [111.5432, -8.3052], // Tutup poligon
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Provinsi Nusa Tenggara Barat',
        value: 5200000, // Contoh populasi atau nilai lainnya
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [116.0195, -9.1235], // Barat daya
            [116.5109, -9.2121], // Selatan
            [117.2764, -8.8685], // Timur
            [117.1909, -8.3801], // Timur laut
            [116.6511, -8.2131], // Barat laut
            [116.0195, -9.1235], // Tutup poligon
          ],
        ],
      },
    },
  ],
};

const ClientSideMap = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-[500px] w-full flex items-center justify-center bg-gray-100">Loading map...</div>;
  }

  const MapWithNoSSR = dynamic(() => import('../../../components/MapWithPolygon'), {
    ssr: false,
    loading: () => <div className="h-[500px] w-full flex items-center justify-center bg-gray-100">Loading map...</div>,
  });

  return (
    <div>
      <MapWithNoSSR geojsonData={staticGeoJSON} title="Peta Masjid" />
    </div>
  );
};

const MasjidPage = () => {
  return (
    <div className="container mx-auto p-4">
      <ContainerPage>
        <ClientSideMap />
      </ContainerPage>
    </div>
  );
};

export default MasjidPage;
