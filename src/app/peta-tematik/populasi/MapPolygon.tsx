'use client';

import { MapContainer, TileLayer, GeoJSON, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import Legend from './Legend';
import { FeatureCollection } from 'geojson';

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
  const geoJsonFeatures: FeatureCollection = {
    type: 'FeatureCollection', // Pastikan ini adalah 'FeatureCollection'
    features: data.map((regency: any) => ({
      type: 'Feature', // Pastikan ini adalah 'Feature'
      properties: {
        name: regency.name,
        type_poligon: regency.type_poligon,
        totalPopulation: regency.totalPopulation,
      },
      geometry: {
        type: regency.type_poligon, // Pastikan ini adalah 'Polygon' atau 'MultiPolygon'
        coordinates: regency.polygons[0], // Pastikan ini adalah array dari koordinat yang benar
      },
    })),
  };

  const getColor = function (data: number) {
    return data > 100000
      ? '#1e3a8a' // Biru gelap
      : data > 80000
      ? '#2563eb' // Biru terang medium
      : data > 60000
      ? '#3b82f6' // Biru terang
      : data > 40000
      ? '#60a5fa' // Biru muda
      : data > 20000
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
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON
          key="Regencies"
          data={geoJsonFeatures}
          onEachFeature={(feature, layer) => {
            layer.bindPopup(
              `<div>
                <h3>${feature.properties.name}</h3>
             <p>${(feature.properties.totalPopulation / 100).toFixed(
               0
             )} ribu jiwa</p>
              </div>`
            );
          }}
          // popupOptions={{ autoClose: false }}
          style={(feature) => ({
            color: '#333',
            weight: 2,
            opacity: 0.5,
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
