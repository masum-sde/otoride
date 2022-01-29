import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./WhyOTORide.css";
import light from "../../image/icon_pack_1/light1.png";
import lightEclipse from "../../image/icon_pack_1/light_eclipse.png";
import puzzle from "../../image/icon_pack_2/puzzle.png";
import puzzleEclipse from "../../image/icon_pack_2/puzzle_eclipse.png";
import stick from "../../image/icon_pack_3/stick.png";
import stickEclipse from "../../image/icon_pack_3/stick_eclipse.png";
import finger from "../../image/icon_pack_4/finger.png";
import fingerEclipse from "../../image/icon_pack_4/finger_eclipse.png";
import FeatureCard from "./FeatureCard/FeatureCard";

const WhyOTORide = () => {
  const fakeCardData = [
    {
      id: 1,
      icon: light,
      eclipse: lightEclipse,
      title: "All-In-One Multiple Vehicle Solution",
      description:
        "Our  platform is already integrated with all major IoT solutions providers and world’s most innovatզive iOT enabled vehicles you might know.",
    },
    {
      id: 2,
      icon: puzzle,
      eclipse: puzzleEclipse,
      title: "Revolutionary features and Technology",
      description:
        "From 100 vehicles to 10,000+, our platform has been there, done that. We provide you with the most advanced technology and expertise to launch and scale.",
    },
    {
      id: 3,
      icon: stick,
      eclipse: stickEclipse,
      title: " Fully Customizable",
      description:
        "With 100+ customized settings and 50+ Customized branding, including your logo, colors and icons as tailored to your need",
    },
    {
      id: 4,
      icon: finger,
      eclipse: fingerEclipse,
      title: "Love at every touch",
      description:
        "Simplicity is the heart of our App experience. We not only deliver apps but also deliver the highest level of experience to your customer.",
    },
  ];
  return (
    <section className="why-otoride light-yellow-eclipse">
      <div className="blue-eclipse">
        <Container>
          <Col xs={12} md={6}>
            <h1 className="display-3">We are the driver of innovation and best user experience</h1>
          </Col>
          <Row className="mt-5 mb-5">
            {fakeCardData.map((data) => (
              <FeatureCard feature={data} />
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default WhyOTORide;
