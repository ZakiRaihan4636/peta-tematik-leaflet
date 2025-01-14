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
  totalHospital: number;
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
        totalHospital: regency.totalHospital,
      },
      geometry: {
        type: regency.type_poligon, // Pastikan ini adalah 'Polygon' atau 'MultiPolygon'
        coordinates: regency.polygons[0], // Pastikan ini adalah array dari koordinat yang benar
      },
    })),
  };
  const getColor = function (data: number) {
    return data > 30
      ? '#16a34a'
      : data > 20
      ? '#22c55e'
      : data > 10
      ? '#4ade80'
      : data > 5
      ? '#86efac'
      : data > 1
      ? '#bbf7d0'
      : data > 1
      ? '#bbf7d0' // Kuning oranye cerah
      : '#bbf7d0'; // Kuning pudar
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
                <p>Jumlah Rumah Sakit: ${feature.properties.totalHospital}</p>
              </div>`
            );
          }}
          // popupOptions={{ autoClose: false }}
          style={(feature) => ({
            color: '#333',
            weight: 2,
            opacity: 1,
            fillColor: getColor(feature?.properties.totalHospital),
            fillOpacity: 0.5,
          })}
        ></GeoJSON>
        <Legend dataRumahSakit={data} />
      </MapContainer>
    </div>
  );
};

export default MapPolygon;
