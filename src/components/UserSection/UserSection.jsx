import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./UserSection.css";
import userMobile1 from "../../image/user_mobile_1.png";
import userMobile2 from "../../image/user_mobile_2.png";
import userMobile3 from "../../image/user_mobile_3.png";
import userIcon1 from "../../image/user_icon_1.svg";
import userIcon2 from "../../image/user_icon_2.svg";
import userIcon3 from "../../image/user_icon_3.svg";
import ListItemModel from "../common/ListItemModel/ListItemModel";
const UserSection = () => {
  const images = [userMobile1, userMobile2, userMobile3];
  const fakeListData = [
    {
      id: 1,
      icon: userIcon1,
      title: "Realtime Vehicle Location",
    },
    {
      id: 2,
      icon: userIcon2,
      title: "Fast Unlocking & Locking",
    },
    {
      id: 3,
      icon: userIcon3,
      title: "Multiple Language Support",
    },
  ];
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
      <Container fluid="md">
        <Row>
          <Col sm={6} className="d-flex align-items-center justify-content-center">
            <img src={images[currentIndex]} alt="" className=" img-fluid " />
          </Col>
          <Col sm={6} className="mt-5 ">
            <h3 className="text-primary mt-1 ">RIDER APP</h3>
            <h1 className="mt-3  display-4">Perfect Customizable Rider app </h1>
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

export default UserSection;
