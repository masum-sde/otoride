import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./AdminSection.css";
import adminPic1 from "../../image/admin_pc_1.png";
import adminPic2 from "../../image/admin_pc_2.png";
import adminPic3 from "../../image/admin_pc_3.png";
import adminIcon1 from "../../image/admin_icon_1.svg";
import adminIcon2 from "../../image/admin_icon_2.svg";
import adminIcon3 from "../../image/admin_icon_3.svg";

const AdminSection = () => {
  const images = [adminPic1, adminPic2, adminPic3];

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
    <section className="admin-section">
      <Container>
        <Row>
          <Col md={6} className="mt-5">
            <h5 className="mt-1">ADMIN APPLICATION</h5>
            <h1 className="mt-3">
              The perfect <br /> app for your <br /> users and you
            </h1>
            <Row className="mt-4 d-flex align-items-center justify-content-center">
              <Col md={2}>
                <img src={adminIcon1} alt="icon1" />
              </Col>
              <Col md={10}>
                <p>User Management</p>
              </Col>
            </Row>
            <Row className="mt-4 d-flex align-items-center justify-content-center">
              <Col md={2}>
                <img src={adminIcon2} alt="icon2" />
              </Col>
              <Col md={10}>
                <p>Trip Management </p>
              </Col>
            </Row>
            <Row className="mt-4 d-flex align-items-center justify-content-center">
              <Col md={2}>
                <img src={adminIcon3} alt="icon3" />
              </Col>
              <Col md={10}>
                <p>Offers and promotions Management </p>
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
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <img src={images[currentIndex]} alt="" className="mobile-image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AdminSection;
