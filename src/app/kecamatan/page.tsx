'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Kecamatan {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const KecamatanPage: React.FC = () => {
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

  return (
    <div>
      <h1>Peta Kecamatan</h1>
      <MapContainer center={[-8.65, 115.2]} zoom={10} style={{ height: '500px', width: '100%' }}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {kecamatanData.map((kecamatan) => (
          <Marker key={kecamatan.id} position={[kecamatan.latitude, kecamatan.longitude] as LatLngExpression} alt={kecamatan.name}>
            <Popup>
              <span>{kecamatan.name}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default dynamic(() => Promise.resolve(KecamatanPage), { ssr: false });
