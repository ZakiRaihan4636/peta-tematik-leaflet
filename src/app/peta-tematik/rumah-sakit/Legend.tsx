import React, { useEffect, useState } from 'react';

interface LegendItem {
  name: string;
  totalHospital: number;
}

const Legend: React.FC<{ dataRumahSakit: any }> = ({ dataRumahSakit }) => {
  const [legendData, setLegendData] = useState<LegendItem[]>([]);

  // Fungsi untuk menentukan warna berdasarkan nilai
  const getColor = (totalHospital: number) => {
    return totalHospital > 30
      ? '#16a34a'
      : totalHospital > 20
      ? '#22c55e'
      : totalHospital > 10
      ? '#4ade80'
      : totalHospital > 5
      ? '#86efac'
      : totalHospital > 1
      ? '#bbf7d0'
      : totalHospital > 1
      ? '#bbf7d0' // Kuning oranye cerah
      : '#bbf7d0'; // Kuning pudar
  };

  const getLegendData = () => {
    setLegendData(dataRumahSakit);
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
      <h4>Legenda Total Rumah Sakit</h4>
      {legendData.map((item, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
          <div
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: getColor(item.totalHospital),
              marginRight: '10px',
            }}
          ></div>
          <span>
            {item.name} : {item.totalHospital}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Legend;
