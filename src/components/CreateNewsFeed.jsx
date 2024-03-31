import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const CreateNewsFeed = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend API
    console.log('Form submitted:', { title, content, category, image, video });
    // Reset form fields after submission
    setTitle('');
    setContent('');
    setCategory('');
    setImage(null);
    setVideo(null);
  };

  return (
    <Container>
      <h1 className="mt-4 mb-4">Create News Feed</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </Form.Group>

        <Form.Group controlId="content">
          <Form.Label>Content</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={4} 
            placeholder="Enter content" 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            required 
          />
        </Form.Group>

        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter category" 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
            required 
          />
        </Form.Group>

        <Form.Group controlId="image">
          <Form.Label>Image</Form.Label>
          <Form.Control 
            type="file" 
            accept="image/*" 
            onChange={(e) => setImage(e.target.files[0])} 
          />
        </Form.Group>

        <Form.Group controlId="video">
          <Form.Label>Video</Form.Label>
          <Form.Control 
            type="file" 
            accept="video/*" 
            onChange={(e) => setVideo(e.target.files[0])} 
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create News Feed
        </Button>
      </Form>
    </Container>
  );
};

export default CreateNewsFeed;
