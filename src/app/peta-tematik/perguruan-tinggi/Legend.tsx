import React, { useEffect, useState } from 'react';

interface LegendItem {
  name: string;
  totalPrivateCollege: number;
}

const Legend: React.FC<{ dataPerguruanTinggi: any }> = ({ dataPerguruanTinggi }) => {
  const [legendData, setLegendData] = useState<LegendItem[]>([]);

  // Fungsi untuk menentukan warna berdasarkan nilai
  const getColor = (totalPrivateCollege: number) => {
    return totalPrivateCollege > 30
      ? '#dc2626'
      : totalPrivateCollege > 20
      ? '#ef4444'
      : totalPrivateCollege > 10
      ? '#f87171'
      : totalPrivateCollege > 5
      ? '#fca5a5'
      : totalPrivateCollege > 4
      ? '#fecaca'
      : totalPrivateCollege > 1
      ? '#fecaca' // Kuning oranye cerah
      : '#fecaca'; // Kuning pudar
  };

  const getLegendData = () => {
    setLegendData(dataPerguruanTinggi);
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
      <h4>Legenda Total Perguruan Tinggi</h4>
      {legendData.map((item, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
          <div
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: getColor(item.totalPrivateCollege),
              marginRight: '10px',
            }}
          ></div>
          <span>
            {item.name} : {item.totalPrivateCollege}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Legend;
