'use client';

import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
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
  polygons: number[][][];
}

interface MapComponentProps {
  data: LocationData[];
  title: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ data, title }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <MapContainer center={[-8.3629537, 115.1360451]} zoom={10} scrollWheelZoom={false} style={{ height: '500px', width: '100%' }}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {data.map((regency) =>
          regency.polygons.map((polygon, index) => {
            if (polygon.length > 1) {
              return <Polygon key={`${regency.id}-${index}`} positions={polygon} color="purple" />;
            } else {
              return <Polygon key={`${regency.id}-${index}`} positions={polygon[0]} color="blue" />;
            }
          })
        )}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
