import React, { useEffect, useState } from 'react';

interface LegendItem {
  name: string;
  totalTouristDestination: number;
}

const Legend: React.FC<{ dataWisata: any }> = ({ dataWisata }) => {
  const [legendData, setLegendData] = useState<LegendItem[]>([]);

  // Fungsi untuk menentukan warna berdasarkan nilai
  const getColor = (totalTouristDestination: number) => {
    return totalTouristDestination > 30
      ? '#FFDC40'
      : totalTouristDestination > 20
      ? '#FFE366'
      : totalTouristDestination > 10
      ? '#FFEA8C'
      : totalTouristDestination > 5
      ? '#FFF1B3'
      : totalTouristDestination > 1
      ? '#FFF4C6'
      : totalTouristDestination > 1
      ? '#FFF4C6' // Kuning oranye cerah
      : '#FFF4C6'; // Kuning pudar
  };

  const getLegendData = () => {
    setLegendData(dataWisata);
  };

  useEffect(() => {
    getLegendData();
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '10px',
        left: '10px',
        backgroundColor: 'white',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
        zIndex: 1000,
      }}
    >
      <h4>Legenda Total Destinasi Wisata</h4>
      {legendData.map((item, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
          <div
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: getColor(item.totalTouristDestination),
              marginRight: '10px',
            }}
          ></div>
          <span>
            {item.name} : {item.totalTouristDestination}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Legend;
