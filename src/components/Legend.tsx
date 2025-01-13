import React, { useEffect, useState } from 'react';

interface LegendItem {
  name: string;
  totalMosque: number;
}

const Legend: React.FC<{ dataMasjid: any }> = ({ dataMasjid }) => {
  const [legendData, setLegendData] = useState<LegendItem[]>([]);

  // Fungsi untuk menentukan warna berdasarkan nilai
  const getColor = (totalMosque: number) => {
    return totalMosque > 70
      ? '#E34A33' // Oranye gelap
      : totalMosque > 60
      ? '#D85C2F' // Oranye medium gelap
      : totalMosque > 50
      ? '#FD8D3C' // Oranye cerah
      : totalMosque > 40
      ? '#FDAE61' // Oranye muda
      : totalMosque > 30
      ? '#FEB24C' // Oranye terang
      : totalMosque > 20
      ? '#FDBA73' // Oranye lebih terang
      : totalMosque > 10
      ? '#FEE08B' // Kuning oranye cerah
      : '#FFFFBF'; // Kuning pudar
  };

  const getLegendData = () => {
    setLegendData(dataMasjid);
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
      <h4>Legenda Total Masjid</h4>
      {legendData.map((item, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
          <div
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: getColor(item.totalMosque),
              marginRight: '10px',
            }}
          ></div>
          <span>
            {item.name} : {item.totalMosque}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Legend;
