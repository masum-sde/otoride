import React from "react";
import { Card, Col } from "react-bootstrap";

const BlogCard = ({ blogInfo }) => {
  const { image, title, date } = blogInfo;
  return (
    <Col className="d-flex align-items-center justify-content-center">
      <Card style={{ width: "22rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{date}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BlogCard;
