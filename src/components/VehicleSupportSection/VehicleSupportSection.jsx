import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./VehicleSupportSection.css";
import vehicle1 from "../../image/vehicle_1.png";
import vehicle2 from "../../image/vehicle_2.png";
import vehicle3 from "../../image/vehicle_3.png";
import vehicle4 from "../../image/vehicle_4.png";
const VehicleSupportSection = () => {
  const fakeVehicleImage = [vehicle1, vehicle2, vehicle3, vehicle4];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === fakeVehicleImage.length - 1) {
        setCurrentIndex(0);
        zoomOutEffect(currentIndex);
      } else {
        setCurrentIndex(currentIndex + 1);
        zoomOutEffect(currentIndex);
      }
    }, 1000);
    zoomInEffect(currentIndex);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const zoomInEffect = (currentIndex) => {
    const vId = "vehicle" + currentIndex;
    document.getElementById(vId).style.transition = "all 0.5s ease-in-out";
    document.getElementById(vId).style.transform = "scale(1.1)";
  };

  const zoomOutEffect = (currentIndex) => {
    const vId = "vehicle" + currentIndex;
    document.getElementById(vId).style.transition = "all 0.5s ease-in-out";
    document.getElementById(vId).style.transform = "scale(1)";
  };

  return (
    <section className="vehicle-support-section text-center mt-4 mb-5 green-eclipse">
      <div className="light-pink-eclipse">
        <Container>
          <Row>
            <h1>
              Kick scooters, <br /> scooters, bikes, e-bikes <br /> and more in one app
            </h1>
            <div>
              <Button variant="dark" className="mt-4 get-started">
                Get Started
              </Button>
            </div>
          </Row>
          <Row className="me-5 ps-5 mt-5 mb-5">
            {fakeVehicleImage.map((image, id) => (
              <Col className="d-flex align-items-center justify-content-center vehicle">
                <img src={image} alt="vehicle" className="" id={`vehicle${id}`} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default VehicleSupportSection;
