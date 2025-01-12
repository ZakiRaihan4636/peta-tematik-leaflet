import { useMap } from 'react-leaflet';
import { useEffect } from 'react';

const Legend = ({ getColor }: { getColor: (value: number) => string }) => {
  const map = useMap();

  useEffect(() => {
    const legend = L.control({ position: 'bottomright' });

    legend.onAdd = () => {
      const div = L.DomUtil.create('div', 'info legend');
      const grades = [0, 50000, 100000, 200000, 500000, 1000000];
      let labels = [];

      grades.forEach((grade, index) => {
        const nextGrade = grades[index + 1];
        labels.push(`<i style="background:${getColor(grade)}"></i> ${grade}${nextGrade ? `&ndash;${nextGrade}` : '+'}`);
      });

      div.innerHTML = labels.join('<br>');
      return div;
    };

    legend.addTo(map);

    return () => {
      legend.remove();
    };
  }, [map, getColor]);

  return null;
};

export default Legend;
