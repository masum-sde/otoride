import React from "react";
import { Card, Col } from "react-bootstrap";
import "./FeatureCard.css";
import blogImage from "../../../image/blog_image.png";
const FeatureCard = ({ feature }) => {
  const { icon, eclipse, title, description } = feature;
  return (
    <>
      <Col xs={12} sm={6} lg={3} className="d-flex align-items-center justify-content-center mt-5  ">
        <Card className="feature-card">
          <div id="image-container">
            <img src={eclipse} alt="eclipse" id="eclipse" />
            <img src={icon} alt="icon" id="icon" />
          </div>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default FeatureCard;
