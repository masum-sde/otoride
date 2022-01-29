import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./PaymentSection.css";
import paymentImage from "../../image/payment.png";
const PaymentSection = () => {
  return (
    <section className="payment-section">
      <Container className="payment">
        <Row className="d-flex align-items-center justify-content-center pb-5 pt-5">
          <Col md={6} className="mt-3 mb-3">
            <h1 className="display-4">We are transforming cities</h1>
          </Col>
          <Col md={6} className="mt-3 mb-3">
            <p className="text-muted">
              Add different types of vehicles in the same app easily. Started with scooters, but want to add bikes? No
              problem! We’ll help you
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={paymentImage} alt="payment" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PaymentSection;
