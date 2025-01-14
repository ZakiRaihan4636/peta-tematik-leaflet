import React, { useEffect, useState } from 'react';

interface LegendItem {
  name: string;
  totalPopulation: number;
}

const Legend: React.FC<{ dataPopulasi: any }> = ({ dataPopulasi }) => {
  const [legendData, setLegendData] = useState<LegendItem[]>([]);

  // Fungsi untuk menentukan warna berdasarkan nilai
  const getColor = (totalPopulation: number) => {
    return totalPopulation > 30 ? '#1e3a8a' : totalPopulation > 20 ? '#2563eb' : totalPopulation > 10 ? '#3b82f6' : totalPopulation > 5 ? '#60a5fa' : totalPopulation > 1 ? '#93c5fd' : '#bfdbfe';
  };

  const getLegendData = () => {
    setLegendData(dataPopulasi);
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
      <h4>Legenda Total Populasi</h4>
      {legendData.map((item, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
          <div
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: getColor(item.totalPopulation),
              marginRight: '10px',
            }}
          ></div>
          <span>
            {item.name} : {item.totalPopulation}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Legend;
