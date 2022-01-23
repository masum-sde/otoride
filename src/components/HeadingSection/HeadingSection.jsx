import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./HeadingSection.css";
import headingPic from "../../image/heading_pic.png";
import logo_1 from "../../image/logo_1.png";
import logo_2 from "../../image/logo_2.png";
import logo_3 from "../../image/logo_3.png";
import logo_4 from "../../image/logo_4.png";

const HeadingSection = () => {
  return (
    <section className="mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <Row>
              <Row>
                <h1 className="intro-text">
                  Most Advanced <br /> Vehicle Sharing <br /> Platform
                </h1>
              </Row>
              <Row className="w-25">
                <button className="get-started">Get Started</button>
              </Row>
            </Row>
            <Row className="mt-5">
              <Col md={4} className="d-flex align-items-center justify-content-end">
                <h5>Trusted By</h5>
              </Col>
              <Col md={2}>
                <img src={logo_1} alt="logo_1" className="img-fluid" />
              </Col>
              <Col md={2}>
                <img src={logo_2} alt="logo_2" className="img-fluid" />
              </Col>
              <Col md={2}>
                <img src={logo_3} alt="logo_3" className="img-fluid" />
              </Col>
              <Col md={2}>
                <img src={logo_4} alt="logo_4" className="img-fluid" />
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <img src={headingPic} alt="picture" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeadingSection;
