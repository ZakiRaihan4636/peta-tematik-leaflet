'use client';

import { MapContainer, TileLayer, GeoJSON, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { FeatureCollection } from 'geojson'; // Pastikan Anda mengimpor tipe yang benar jika menggunakan TypeScript

import Legend from './Legend';

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
}

const MapPolygon: React.FC<MapComponentProps> = ({ data }) => {
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
        coordinates: regency.polygons, // Pastikan ini adalah array dari koordinat yang benar
      },
    })),
  };

  const getColor = function (data: number) {
    return data > 30
      ? '#dc2626'
      : data > 20
      ? '#ef4444'
      : data > 10
      ? '#f87171'
      : data > 5
      ? '#fca5a5'
      : data > 1
      ? '#fecaca'
      : data > 1
      ? '#fecaca' // Kuning oranye cerah
      : '#fecaca'; // Kuning pudar
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
                <p>Jumlah Perguruan Tinggi: ${feature.properties.totalPrivateCollege}</p>
              </div>`
            );
          }}
          // popupOptions={{ autoClose: false }}
          style={(feature) => ({
            color: '#f8fafc',
            weight: 2,
            opacity: 1,
            fillColor: getColor(feature?.properties.totalPrivateCollege),
            fillOpacity: 0.5,
          })}
        ></GeoJSON>
        <Legend dataPerguruanTinggi={data} />
      </MapContainer>
    </div>
  );
};

export default MapPolygon;
