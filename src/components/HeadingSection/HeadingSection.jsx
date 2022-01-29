import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./HeadingSection.css";
import headingPic from "../../image/heading_pic.png";
import logo_1 from "../../image/logo_1.png";
import logo_2 from "../../image/logo_2.png";
import logo_3 from "../../image/logo_3.png";
import logo_4 from "../../image/logo_4.png";

const HeadingSection = () => {
  return (
    <section className="head-section mt-5">
      <Container fluid="md">
        <Row>
          <Col md={6}>
            <Row>
              <Row>
                <h1 className="intro-text display-2">Most Advanced Vehicle Sharing Platform</h1>
              </Row>
              <div>
                <Button variant="dark" className=" get-started">
                  Get Started
                </Button>
              </div>
            </Row>
            <Row className="mt-5 mb-5">
              <Col md={4} className="d-flex align-items-center justify-content-center">
                <h5>Trusted By</h5>
              </Col>
              <Col xs={3} sm={3} md={2}>
                <img src={logo_1} alt="logo_1" className="img-fluid" />
              </Col>
              <Col xs={3} sm={3} md={2}>
                <img src={logo_2} alt="logo_2" className="img-fluid" />
              </Col>
              <Col xs={3} sm={3} md={2}>
                <img src={logo_3} alt="logo_3" className="img-fluid" />
              </Col>
              <Col xs={3} sm={3} md={2}>
                <img src={logo_4} alt="logo_4" className="img-fluid" />
              </Col>
            </Row>
          </Col>
          <Col md={6} className="header-image">
            <img src={headingPic} alt="picture" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeadingSection;
