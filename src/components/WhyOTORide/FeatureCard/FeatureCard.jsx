import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./FeatureCard.css";
const FeatureCard = ({ feature }) => {
  const { icon, eclipse, title, description } = feature;
  return (
    <Col xs={12} sm={6} lg={3} className="d-flex align-items-center justify-content-center mt-5 ">
      <Card className="feature-card">
        <Row>
          <div id="image-container">
            <img src={eclipse} alt="eclipse" id="eclipse" />
            <img src={icon} alt="icon" id="icon" />
          </div>
        </Row>
        <Row>
          <div>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
          </div>
        </Row>
      </Card>
    </Col>
  );
};

export default FeatureCard;
