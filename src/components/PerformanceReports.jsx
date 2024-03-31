import React from 'react';
import { Container } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';

const PerformanceReports = () => {
  // Generate random performance data
  const generateRandomData = () => {
    const randomData = [];
    for (let i = 0; i < 7; i++) {
      randomData.push(Math.floor(Math.random() * 100) + 1); // Generating random numbers between 1 and 100
    }
    return randomData;
  };

  const chartData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Views',
        data: generateRandomData(),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Likes',
        data: generateRandomData(),
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      },
      {
        label: 'Comments',
        data: generateRandomData(),
        fill: false,
        borderColor: 'rgb(54, 162, 235)',
        tension: 0.1
      }
    ]
  };

  return (
    <Container>
      <h1 className="mt-4 mb-4">Performance Reports</h1>
      <div>
        <Line data={chartData} />
      </div>
    </Container>
  );
};

export default PerformanceReports;
