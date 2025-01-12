import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';

interface Feature {
  geometry: {
    type: string;
    coordinates: number[][][];
  };
  properties: {
    name: string;
    value: number;
  };
}

interface MapComponentProps {
  geojsonData: {
    type: string;
    features: Feature[];
  };
  title: string;
}

const MapWithPolygon: React.FC<MapComponentProps> = ({ geojsonData, title }) => {
  const [highlightedLayer, setHighlightedLayer] = useState<any | null>(null);

  const getColor = (value: number) => {
    return value > 1000000 ? '#800026' : value > 500000 ? '#BD0026' : value > 200000 ? '#E31A1C' : value > 100000 ? '#FC4E2A' : value > 50000 ? '#FD8D3C' : '#FFEDA0';
  };

  const style = (feature: Feature) => ({
    fillColor: getColor(feature.properties.value),
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
  });

  const highlightFeature = (e: any) => {
    const layer = e.target;
    setHighlightedLayer(layer);
    layer.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7,
    });
    layer.bringToFront();
  };

  const resetHighlight = () => {
    if (highlightedLayer && highlightedLayer.feature) {
      highlightedLayer.setStyle(style(highlightedLayer.feature));
    }
  };

  const zoomToFeature = (e: any) => {
    const map = e.target._map;
    map.fitBounds(e.target.getBounds());
  };

  return (
    <div className="map-container">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <MapContainer center={[-8.3629537, 115.1360451]} zoom={13} scrollWheelZoom={true} style={{ height: '500px', width: '100%' }}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {geojsonData.features.map((feature, index) => {
          const positions = feature.geometry.coordinates[0].map((coord) => [coord[1], coord[0]]);
          return (
            <Polygon
              key={index}
              positions={positions}
              pathOptions={style(feature)}
              eventHandlers={{
                mouseover: highlightFeature,
                mouseout: resetHighlight,
                click: zoomToFeature,
              }}
            >
              <Tooltip>
                <strong>{feature.properties.name}</strong>
                <br />
                Value: {feature.properties.value}
              </Tooltip>
            </Polygon>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapWithPolygon;
