import React from "react";
import { Col, Row } from "react-bootstrap";
import "./TestimonialCard.css";
const TestimonialCard = ({ data }) => {
  const { employeeName, employeeDesignation, companyName, testimonial, avatarImage, vehicleImage } = data;
  return (
    <Row className="testimonial-card bg-light ">
      <Col md={4}>
        <div className="vehicle-image">
          <img src={vehicleImage} className="img-fluid" />
        </div>
      </Col>
      <Col md={8}>
        <Row className="mt-5">
          <Col xs={12} md={2} className="all-info">
            <img src={avatarImage} className="img-fluid" />
          </Col>
          <Col xs={12} md={10} className="all-info ">
            <h6>{employeeName}</h6>
            <p className="text-muted">
              {employeeDesignation},{companyName}
            </p>
          </Col>
        </Row>
        <Row className="all-info ">
          <h3 className="pt-3 pb-1">{testimonial}</h3>
        </Row>
      </Col>
    </Row>
  );
};

export default TestimonialCard;
