import React, { useEffect, useState } from 'react';

interface LegendItem {
  name: string;
  totalTourism: number;
}

const Legend: React.FC<{ dataTuris: any }> = ({ dataTuris }) => {
  const [legendData, setLegendData] = useState<LegendItem[]>([]);

  // Fungsi untuk menentukan warna berdasarkan nilai
  const getColor = (totalTourism: number) => {
    return totalTourism > 30
      ? '#5D51F2'
      : totalTourism > 20
      ? '#695CFF'
      : totalTourism > 10
      ? '#7D74F5'
      : totalTourism > 5
      ? '#9E97F7'
      : totalTourism > 1
      ? '#BEB9FA'
      : totalTourism > 1
      ? '#BEB9FA' // Kuning oranye cerah
      : '#BEB9FA'; // Kuning pudar
  };

  const getLegendData = () => {
    setLegendData(dataTuris);
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
      <h4>Legenda Total Turis </h4>
      {legendData.map((item, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
          <div
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: getColor(item.totalTourism),
              marginRight: '10px',
            }}
          ></div>
          <span>
            {item.name} : {item.totalTourism}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Legend;
