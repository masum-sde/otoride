import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Internet.css";
import globe from "../../image/globe.png";
const Internet = () => {
  return (
    <section className="internet">
      <Container fluid="md">
        <Row>
          <Col xs={{ span: 12, order: 2 }} sm={{ span: 6, order: 1 }} className="internet-container ">
            <h1 className="text-white pt-1 display-4">The Backbone for Internet Business Worldwide</h1>
            <p className="text-muted pt-3">
              Add di!erent types of vehicles in the same app easily. Started with scooters, but want to add bikes? No
              problem! We’ll help you
            </p>
            <div className="pt-2">
              <Button variant="dark" className="mt-4 get-started">
                Get Started
              </Button>
            </div>
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            sm={{ span: 6, order: 2 }}
            className="internet-container d-flex align-items-center justify-content-center"
          >
            <img src={globe} alt="globe" className="img-fluid " />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Internet;
