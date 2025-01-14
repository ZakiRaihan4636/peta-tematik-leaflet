import React, { useEffect, useState } from 'react';

interface LegendItem {
  name: string;
  totalPopulation: number;
}

const Legend: React.FC<{ dataPopulasi: any }> = ({ dataPopulasi }) => {
  const [legendData, setLegendData] = useState<LegendItem[]>([]);

  // Fungsi untuk menentukan warna berdasarkan nilai
  const getColor = function (data: number) {
    return data > 200000
      ? '#E34A33' // Merah gelap
      : data > 150000
      ? '#D85C2F' // Merah terang medium
      : data > 100000
      ? '#FD8D3C' // Merah terang
      : data > 50000
      ? '#FDAE61' // Merah muda
      : data > 20000
      ? '#FEB24C' // Merah sangat muda
      : '#FEE08B'; // Merah pudar
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
        right: '10px',
        backgroundColor: 'white',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
        zIndex: 1000,
        opacity: 0.8,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginBottom: '5px',
        }}
      >
        <span>80.000 - 100.000</span>
        <div
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: '#2563eb',
            marginLeft: '10px',
          }}
        ></div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginBottom: '5px',
        }}
      >
        <span>60.000 - 80.000</span>
        <div
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: '#3b82f6',
            marginLeft: '10px',
          }}
        ></div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginBottom: '5px',
        }}
      >
        <span>40.000 - 60.000</span>
        <div
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: '#60a5fa',
            marginLeft: '10px',
          }}
        ></div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginBottom: '5px',
        }}
      >
        <span>20.000 - 40.000</span>
        <div
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: '#93c5fd',
            marginLeft: '10px',
          }}
        ></div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginBottom: '5px',
        }}
      >
        <span> 0 - 20.000</span>
        <div
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: '#bfdbfe',
            marginLeft: '10px',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Legend;
