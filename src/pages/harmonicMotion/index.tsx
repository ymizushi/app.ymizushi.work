import { useState, useEffect } from 'react';

export default function Index() {
  const [degree, setDegree] = useState(0);
  const [radius, setRadius] = useState(10);

  useEffect(() => {
    setInterval(() => {
      setDegree((before) => before + 1);
    }, 10);
  }, []);

  return (
    <svg
      viewBox={`0 0 ${80} ${80}`}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <g transform={`translate(20, 20)`}>
        <g
          transform={`translate(${
            radius * Math.cos((2 * Math.PI * degree) / 360)
          }, ${radius * Math.sin((2 * Math.PI * degree) / 360)})`}
        >
          <ellipse cx="0" cy="0" rx="1" ry="1" />
        </g>
      </g>
    </svg>
  );
}
