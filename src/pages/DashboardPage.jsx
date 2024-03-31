import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { fetchNewsFeeds, fetchPerformanceData } from '../services/ApiService.js'; // Importing API functions

const DashboardPage = () => {
  const [newsFeeds, setNewsFeeds] = useState([]);
  const [performanceData, setPerformanceData] = useState({});

  useEffect(() => {
    // Fetch news feeds and performance data when component mounts
    fetchNewsFeeds().then(data => setNewsFeeds(data));
    fetchPerformanceData().then(data => setPerformanceData(data));
  }, []);

  return (
    <Container>
      <h1 className="mt-4 mb-4">Dashboard</h1>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>News Feed Metrics</Card.Title>
              <Card.Text>
                Total News Feeds: {newsFeeds.length}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Performance Metrics</Card.Title>
              <Card.Text>
                Total Views: {performanceData.views ? performanceData.views.reduce((a, b) => a + b, 0) : 0}
              </Card.Text>
              <Card.Text>
                Total Likes: {performanceData.likes ? performanceData.likes.reduce((a, b) => a + b, 0) : 0}
              </Card.Text>
              <Card.Text>
                Total Comments: {performanceData.comments ? performanceData.comments.reduce((a, b) => a + b, 0) : 0}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Add more cards or components as needed */}
      </Row>
    </Container>
  );
};

export default DashboardPage;
