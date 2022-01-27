import React from "react";
import { Container, Row } from "react-bootstrap";
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
        "We’ll help you to integrate any vehicle type to OTORide platform. It may be kickn scooter, Any other type of scooters",
    },
    {
      id: 2,
      icon: puzzle,
      eclipse: puzzleEclipse,
      title: "Advanced Feature & Technology",
      description:
        "We’ll help you to integrate any vehicle type to OTORide platform. It may be kickn scooter, Any other type of scooters",
    },
    {
      id: 3,
      icon: stick,
      eclipse: stickEclipse,
      title: "Fully Customizable Software",
      description:
        "We’ll help you to integrate any vehicle type to OTORide platform. It may be kickn scooter, Any other type of scooters",
    },
    {
      id: 4,
      icon: finger,
      eclipse: fingerEclipse,
      title: "Great User Experience",
      description:
        "We’ll help you to integrate any vehicle type to OTORide platform. It may be kickn scooter, Any other type of scooters",
    },
  ];
  return (
    <section className="why-otoride light-yellow-eclipse">
      <div className="blue-eclipse">
        <Container>
          <h1 className="display-3">Why OTORide</h1>
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
