import React from 'react';
import { Container } from 'react-bootstrap';
import PerformanceReports from '../components/PerformanceReports';

const PerformanceReportsPage = () => {
  return (
    <Container>
      <h1 className="mt-4 mb-4">Performance Reports</h1>
      <PerformanceReports />
    </Container>
  );
};

export default PerformanceReportsPage;
