import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./UserSection.css";
import userMobile1 from "../../image/user_mobile_1.png";
import userMobile2 from "../../image/user_mobile_2.png";
import userMobile3 from "../../image/user_mobile_3.png";
import userIcon1 from "../../image/user_icon_1.svg";
import userIcon2 from "../../image/user_icon_2.svg";
import userIcon3 from "../../image/user_icon_3.svg";
const UserSection = () => {
  const images = [userMobile1, userMobile2, userMobile3];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <section className="user-section">
      <Container>
        <Row>
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <img src={images[currentIndex]} alt="" className="mobile-image" />
          </Col>
          <Col md={6} className="mt-5">
            <h5 className="text-primary mt-1">USER APPLICATION</h5>
            <h1 className="mt-3">
              The perfect <br /> app for your <br /> users and you
            </h1>
            <Row className="mt-4 d-flex align-items-center justify-content-center">
              <Col md={2}>
                <img src={userIcon1} alt="icon1" />
              </Col>
              <Col md={10}>
                <p>Realtime Vehicle Location</p>
              </Col>
            </Row>
            <Row className="mt-4 d-flex align-items-center justify-content-center">
              <Col md={2}>
                <img src={userIcon2} alt="icon2" />
              </Col>
              <Col md={10}>
                <p>Fast Unlocking & Locking </p>
              </Col>
            </Row>
            <Row className="mt-4 d-flex align-items-center justify-content-center">
              <Col md={2}>
                <img src={userIcon3} alt="icon3" />
              </Col>
              <Col md={10}>
                <p>Multiple Language Support </p>
              </Col>
            </Row>
            <Row className="mt-5">
              <button className="learn-more-btn w-25">Learn More</button>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default UserSection;
