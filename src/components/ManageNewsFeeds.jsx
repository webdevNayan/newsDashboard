import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { fetchNewsFeeds } from '../services/ApiService.js'; // Importing API function

const ManageNewsFeeds = () => {
  const [newsFeeds, setNewsFeeds] = useState([]);

  useEffect(() => {
    // Fetch news feeds when component mounts
    fetchNewsFeeds().then(data => setNewsFeeds(data));
  }, []);

  const handleDelete = (id) => {
    // Handle delete operation, e.g., send delete request to backend API
    console.log('Deleting news feed with id:', id);
    // Update news feeds state after deletion (optional)
    setNewsFeeds(newsFeeds.filter(feed => feed.id !== id));
  };

  return (
    <Container>
      <h1 className="mt-4 mb-4">Manage News Feeds</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Creation Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {newsFeeds.map(feed => (
            <tr key={feed.id}>
              <td>{feed.title}</td>
              <td>{feed.category}</td>
              <td>{feed.creationDate}</td>
              <td>{feed.status}</td>
              <td>
                <Button variant="info" size="sm" href={`/news/${feed.id}`}>
                  View
                </Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(feed.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ManageNewsFeeds;
