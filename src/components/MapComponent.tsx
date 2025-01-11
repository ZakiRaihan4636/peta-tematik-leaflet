'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

interface LocationData {
  id: number;
  alt_name: string;
  latitude: number;
  longitude: number;
}

interface MapComponentProps {
  data: LocationData[]; // Menyimpan data Kecamatan atau Kabupaten
  title: string; // Judul untuk peta
}

const MapComponent: React.FC<MapComponentProps> = ({ data, title }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <MapContainer center={[-8.3629537, 115.1360451]} zoom={10} scrollWheelZoom={false} style={{ height: '500px', width: '100%' }}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item) => (
            <Marker key={item.id} position={[item.latitude, item.longitude]}>
              <Popup>
                <div>
                  <h3>{item.alt_name}</h3>
                  <p>Latitude: {item.latitude.toFixed(5)}</p>
                  <p>Longitude: {item.longitude.toFixed(5)}</p>
                </div>
              </Popup>
            </Marker>
          ))
        ) : (
          <div>Data tidak tersedia</div>
        )}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
