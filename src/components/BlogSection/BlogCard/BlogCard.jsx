import React from "react";
import { Card, Col } from "react-bootstrap";
import "./BlogCard.css";
const BlogCard = ({ blogInfo }) => {
  const { image, title, date } = blogInfo;
  return (
    <Col xs={12} sm={6} md={4} className="d-flex align-items-center justify-content-center blog-card">
      <Card style={{ width: "22rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="text-muted">{date}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BlogCard;
