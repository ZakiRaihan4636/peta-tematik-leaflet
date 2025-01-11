'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

interface Kecamatan {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

interface MapComponentProps {
  kecamatanData: Kecamatan[];
}

export default function MapComponent({ kecamatanData }: MapComponentProps) {
  return (
    <MapContainer
      center={[-8.65, 115.2]}
      zoom={10}
      scrollWheelZoom={false}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {kecamatanData.map((kecamatan) => (
        <Marker
          key={kecamatan.id}
          position={[kecamatan.latitude, kecamatan.longitude]}
        >
          <Popup>{kecamatan.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
