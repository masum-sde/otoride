import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./OperatorSection.css";
import mobileOperator from "../../image/mobile_operator.png";
import icon1 from "../../image/icon_1.svg";
import icon2 from "../../image/icon_2.svg";
import icon3 from "../../image/icon_3.svg";
const OperatorSection = () => {
  return (
    <section className="operator-section">
      <Container>
        <Row>
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <img src={mobileOperator} alt="" className="mobile-image" />
          </Col>
          <Col md={6} className="mt-5">
            <h5 className="text-success mt-1">OPERATOR APLICATION</h5>
            <h1 className="mt-3">
              Easy and <br /> affordable
            </h1>
            <Row className="mt-4 d-flex align-items-center justify-content-center">
              <Col md={2}>
                <img src={icon1} alt="icon1" />
              </Col>
              <Col md={10}>
                <p>Smart Task Management</p>
              </Col>
            </Row>
            <Row className="mt-4 d-flex align-items-center justify-content-center">
              <Col md={2}>
                <img src={icon2} alt="icon2" />
              </Col>
              <Col md={10}>
                <p>Realtime Vehicle Routing </p>
              </Col>
            </Row>
            <Row className="mt-4 d-flex align-items-center justify-content-center">
              <Col md={2}>
                <img src={icon3} alt="icon3" />
              </Col>
              <Col md={10}>
                <p>Filter Vehicle by Issue type </p>
              </Col>
            </Row>
            <Row className="mt-5">
              <div>
                <Button variant="dark" className=" learn-more-btn">
                  Learn More
                </Button>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OperatorSection;
