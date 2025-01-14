import React, { useEffect, useState } from 'react';

interface LegendItem {
  name: string;
  totalTourism: number;
}

const Legend: React.FC<{ dataTuris: any }> = ({ dataTuris }) => {
  const [legendData, setLegendData] = useState<LegendItem[]>([]);

  // Fungsi untuk menentukan warna berdasarkan nilai
  const getColor = function (totalTourism: number) {
    return totalTourism > 1354023
      ? '#7A00E6'
      : totalTourism > 675000
      ? '#9C27B0'
      : totalTourism > 29270
      ? '#BA68C8'
      : totalTourism > 150000
      ? '#E1BEE7'
      : totalTourism > 75000
      ? '#F8BBD0'
      : totalTourism > 50000
      ? '#F8BBD0' // Ungu muda
      : '#F8BBD0'; // Ungu pudar
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
