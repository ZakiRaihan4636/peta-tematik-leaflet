'use client'; // App Router menggunakan client component untuk React-Leaflet

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

// Tipikal data wilayah dari API
interface Region {
  id: number;
  name: string;
  totalMosque: number;
  polygons: LatLngExpression[][];
}

const MapWithPolygon: React.FC = () => {
  const [regionsData, setRegionsData] = useState<Region[]>([]);

  // Fungsi untuk mengambil data dari API
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:3000/api/tematic-data'); // Ganti dengan URL API yang sesuai
  //       const data = await response.json();

  //       // Log data untuk memeriksa format yang diterima
  //       console.log('Data received from API:', data);

  //       // Pastikan data adalah array sebelum melakukan map
  //       if (Array.isArray(data)) {
  //         const formattedData = data.map((region: any) => ({
  //           id: region.id,
  //           name: region.name,
  //           totalMosque: region.totalMosque,
  //           polygons: region.polygons[0] || [], // Ambil poligon pertama atau kosongkan jika tidak ada
  //         }));

  //         setRegionsData(formattedData);
  //       } else {
  //         console.error('Data is not an array:', data);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  // Gunakan useEffect untuk memanggil fetchData saat komponen pertama kali dimuat
  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  return (
    <MapContainer center={[-8.65, 115.2]} zoom={10} style={{ height: '500px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
      {/* {regionsData.map((region) => (
        <Polygon key={region.id} positions={region.polygons as LatLngExpression[]} color="green">
          <Tooltip direction="center" opacity={1} permanent>
            <div style={{ textAlign: 'center' }}>
              <strong>{region.name}</strong>
              <br />
              Masjid: {region.totalMosque}
            </div>
          </Tooltip>
        </Polygon>
      ))} */}
    </MapContainer>
  );
};

export default MapWithPolygon;
