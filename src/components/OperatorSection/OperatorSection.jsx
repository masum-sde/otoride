import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./OperatorSection.css";
import mobileOperator from "../../image/mobile_operator.png";
import icon1 from "../../image/icon_1.svg";
import icon2 from "../../image/icon_2.svg";
import icon3 from "../../image/icon_3.svg";
import ListItemModel from "../common/ListItemModel/ListItemModel";

const OperatorSection = () => {
  const fakeListData = [
    {
      id: 1,
      icon: icon1,
      title: "Smart Vehicle Task Management",
    },
    {
      id: 2,
      icon: icon2,
      title: "Real Time navigation ",
    },
    {
      id: 3,
      icon: icon3,
      title: "Find problematic Vehicles by Advanced filters",
    },
  ];

  return (
    <section className="operator-section">
      <Container fluid="md">
        <Row>
          <Col sm={6} className="d-flex align-items-center justify-content-center">
            <img src={mobileOperator} alt="" className=" img-fluid " />
          </Col>
          <Col sm={6} className="mt-5 ">
            <h3 className="text-success mt-1 ">OPERATOR APP</h3>
            <h1 className="mt-3  display-4">Smart Vehicle Task Tracking App</h1>
            {fakeListData.map((data) => (
              <ListItemModel key={data.id} item={data} />
            ))}

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
