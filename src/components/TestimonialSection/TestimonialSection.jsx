import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./TestimonialSection.css";
import avatar from "../../image/success/avatar.png";
import vehicleImage from "../../image/success/kick_scotter.png";
import companyLogo1 from "../../image/success/company1.png";
import companyLogo2 from "../../image/success/company2.png";
import sap from "../../image/logo/sap.svg";
import americanAirlines from "../../image/logo/american-airlines.svg";
import spotify from "../../image/logo/spotify.svg";
import TestimonialCard from "./TestimonialCard/TestimonialCard";
const TestimonialSection = () => {
  const fakeTestimonialData = [
    {
      id: "logo0",
      employeeName: "Rahim Darex",
      employeeDesignation: "CEO",
      companyName: "Ignite",
      companyLogo: companyLogo1,
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae perferendis molestiae sit voluptatum sunt culpa.",
      avatarImage: avatar,
      vehicleImage: vehicleImage,
    },
    {
      id: "logo1",
      employeeName: "Laru Ken",
      employeeDesignation: "CTO",
      companyName: "HAYDE",
      companyLogo: companyLogo2,
      testimonial: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, maxime!",
      avatarImage: avatar,
      vehicleImage: vehicleImage,
    },
    {
      id: "logo2",
      employeeName: "Selim Reza",
      employeeDesignation: "Manager",
      companyName: "Ignite",
      companyLogo: companyLogo1,
      testimonial: "Consectetur adipisicing elit. Beatae perferendis molestiae sit voluptatum sunt culpa.",
      avatarImage: avatar,
      vehicleImage: vehicleImage,
    },
    {
      id: "logo3",
      employeeName: "Halbi Nok",
      employeeDesignation: "CFO",
      companyName: "HAYDE",
      companyLogo: companyLogo2,
      testimonial: "Beatae perferendis molestiae sit voluptatum sunt culpa.",
      avatarImage: avatar,
      vehicleImage: vehicleImage,
    },
    {
      id: "logo4",
      employeeName: "Jal Malik",
      employeeDesignation: "Director",
      companyName: "Ignite",
      companyLogo: companyLogo1,
      testimonial:
        "Ipsum dolor sit amet, consectetur adipisicing elit. Beatae perferendis molestiae sit voluptatum sunt culpa.",
      avatarImage: avatar,
      vehicleImage: vehicleImage,
    },
  ];

  const [currentId, setCurrentId] = useState("logo1");
  const loadData = fakeTestimonialData.find((data) => data.id === currentId);

  return (
    <section className="testimonial-section">
      <Container>
        <Row className="mt-4 mb-5 text-center">
          <h5 className="mt-4 text-warning display-6">Clients</h5>
          <h1 className="mt-4 display-4">Success on OTORide</h1>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="testimonial-container">
              <div className="logo-container">
                {fakeTestimonialData.map((data) => (
                  <div
                    id={data.id}
                    className={
                      currentId === data.id
                        ? "logohover p-md-3 d-flex align-items-center justify-content-center"
                        : "logo p-md-3 d-flex align-items-center justify-content-center"
                    }
                    onMouseOver={() => setCurrentId(data.id)}
                  >
                    <img src={data.companyLogo} />
                  </div>
                ))}
              </div>
              <div className="testimonial-card-container">
                <TestimonialCard data={loadData} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialSection;
