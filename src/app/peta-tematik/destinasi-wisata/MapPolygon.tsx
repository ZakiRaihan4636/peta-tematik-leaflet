'use client';

import { MapContainer, TileLayer, GeoJSON, Popup } from 'react-leaflet';
import { FeatureCollection } from 'geojson'; // Pastikan Anda mengimpor tipe yang benar jika menggunakan TypeScript

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import Legend from './Legend';

interface LocationData {
  id: number;
  name: string;
  totalTouristDestination: number;
  type_poligon: string; // Polygon or MultiPolygon
  polygons: number[][] | number[][][]; // Single Polygon or MultiPolygon
}

interface MapComponentProps {
  data: LocationData[];
}

const MapPolygon: React.FC<MapComponentProps> = ({ data }) => {
  // Mengonversi data menjadi format GeoJSON yang sesuai
  // Mengonversi data menjadi format GeoJSON yang sesuai
  const geoJsonFeatures: FeatureCollection = {
    type: 'FeatureCollection', // Pastikan ini adalah 'FeatureCollection'
    features: data.map((regency: any) => ({
      type: 'Feature', // Pastikan ini adalah 'Feature'
      properties: {
        name: regency.name,

        type_poligon: regency.type_poligon,
        totalTouristDestination: regency.totalTouristDestination,
      },
      geometry: {
        type: regency.type_poligon, // Pastikan ini adalah 'Polygon' atau 'MultiPolygon'
        coordinates: regency.polygons[0], // Pastikan ini adalah array dari koordinat yang benar
      },
    })),
  };

  const getColor = function (data: number) {
    return data > 30
      ? '#FFDC40'
      : data > 20
      ? '#FFE366'
      : data > 10
      ? '#FFEA8C'
      : data > 5
      ? '#FFF1B3'
      : data > 1
      ? '#FFF4C6'
      : data > 1
      ? '#FFF4C6' // Kuning oranye cerah
      : '#FFF4C6'; // Kuning pudar
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
                <p>Jumlah Kunjungan Destinasi Wisata: ${feature.properties.totalTouristDestination}</p>
              </div>`
            );
          }}
          // popupOptions={{ autoClose: false }}
          style={(feature) => ({
            color: '#333',
            weight: 2,
            opacity: 1,
            fillColor: getColor(feature?.properties.totalTouristDestination),
            fillOpacity: 0.5,
          })}
        ></GeoJSON>
        <Legend dataWisata={data} />
      </MapContainer>
    </div>
  );
};

export default MapPolygon;
