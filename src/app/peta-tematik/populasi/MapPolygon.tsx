'use client';

import { MapContainer, TileLayer, GeoJSON, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import Legend from './Legend';

interface LocationData {
  id: number;
  name: string;
  totalPopulation: number;
  type_poligon: string; // Polygon or MultiPolygon
  polygons: number[][] | number[][][]; // Single Polygon or MultiPolygon
}

interface MapComponentProps {
  data: LocationData[];
}

const MapPolygon: React.FC<MapComponentProps> = ({ data }) => {
  // Mengonversi data menjadi format GeoJSON yang sesuai
  const geoJsonFeatures = data.map((regency) => ({
    type: 'Feature',
    properties: {
      name: regency.name,
      totalPopulation: regency.totalPopulation,
      type_poligon: regency.type_poligon,
    },
    geometry: {
      type: regency.type_poligon, // bisa Polygon atau MultiPolygon
      coordinates: regency.polygons[0], // Koordinat untuk Polygon atau MultiPolygon
    },
  }));

  const getColor = function (data: number) {
    return data > 30
      ? '#1e3a8a' // Biru gelap
      : data > 20
      ? '#2563eb' // Biru terang medium
      : data > 10
      ? '#3b82f6' // Biru terang
      : data > 5
      ? '#60a5fa' // Biru muda
      : data > 1
      ? '#93c5fd' // Biru sangat muda
      : '#bfdbfe'; // Biru pudar
  };

  return (
    <div>
      <MapContainer
        center={[-8.3629537, 115.1360205]} // Koordinat tengah peta
        zoom={9.4}
        scrollWheelZoom={true}
        style={{ height: '500px', width: '100%', marginTop: '5px' }}
      >
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <GeoJSON
          key="Regencies"
          data={geoJsonFeatures}
          onEachFeature={(feature, layer) => {
            layer.bindPopup(
              `<div>
                <h3>${feature.properties.name}</h3>
                <p>Jumlah Populasi: ${feature.properties.totalPopulation}</p>
              </div>`
            );
          }}
          popupOptions={{ autoClose: false }}
          style={(feature) => ({
            color: '#f8fafc',
            weight: 2,
            opacity: 1,
            fillColor: getColor(feature?.properties.totalPopulation),
            fillOpacity: 0.5,
          })}
        ></GeoJSON>
        <Legend dataPopulasi={data} />
      </MapContainer>
    </div>
  );
};

export default MapPolygon;
