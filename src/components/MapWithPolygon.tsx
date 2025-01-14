'use client';

import { MapContainer, TileLayer, GeoJSON, Popup } from 'react-leaflet';
import { FeatureCollection } from 'geojson'; // Pastikan Anda mengimpor tipe yang benar jika menggunakan TypeScript
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

interface LocationData {
  id: number;
  name: string;
  totalPopulation: number;
  totalHospital: number;
  totalMosque: number;
  totalPrivateCollege: number;
  totalTourism: number;
  totalTouristDestination: number;
  type_poligon: string; // Polygon or MultiPolygon
  polygons: number[][] | number[][][]; // Single Polygon or MultiPolygon
}

interface MapComponentProps {
  data: LocationData[];
  title: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ data, title }) => {
  // Mengonversi data menjadi format GeoJSON yang sesuai
  const geoJsonFeatures: FeatureCollection = {
    type: 'FeatureCollection', // Pastikan ini adalah 'FeatureCollection'
    features: data.map((regency: any) => ({
      type: 'Feature', // Pastikan ini adalah 'Feature'
      properties: {
        name: regency.name,
        totalPopulation: regency.totalPopulation,
        totalHospital: regency.totalHospital,
        totalMosque: regency.totalMosque,
        totalPrivateCollege: regency.totalPrivateCollege,
        totalTourism: regency.totalTourism,
        type_poligon: regency.type_poligon,
        totalTouristDestination: regency.totalTouristDestination,
      },
      geometry: {
        type: regency.type_poligon, // Pastikan ini adalah 'Polygon' atau 'MultiPolygon'
        coordinates: regency.polygons, // Pastikan ini adalah array dari koordinat yang benar
      },
    })),
  };

  // Sekarang geoJsonFeatures adalah objek GeoJSON yang valid

  const getColor = function (data: number) {
    return data > 70
      ? '#E34A33' // Oranye gelap
      : data > 60
      ? '#D85C2F' // Oranye medium gelap
      : data > 50
      ? '#FD8D3C' // Oranye cerah
      : data > 40
      ? '#FDAE61' // Oranye muda
      : data > 30
      ? '#FEB24C' // Oranye terang
      : data > 20
      ? '#FDBA73' // Oranye lebih terang
      : data > 10
      ? '#FEE08B' // Kuning oranye cerah
      : '#FFFFBF'; // Kuning pudar
  };

  return (
    <div>
      <h2 className="text-xl font-semibold ">{title}</h2>
      <MapContainer
        center={[-8.3629537, 115.1360205]} // Koordinat tengah peta
        zoom={9.4}
        scrollWheelZoom={true}
        style={{ height: '500px', width: '100%' }}
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
                <p>Jumlah Masjid: ${feature.properties.totalMosque}</p>
              </div>`
            );
          }}
          style={(feature: any) => ({
            color: 'blue',
            weight: 2,
            opacity: 1,
            fillColor: getColor(feature.properties.totalMosque),
            fillOpacity: 0.5,
          })}
        ></GeoJSON>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
