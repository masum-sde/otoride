import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./AdminSection.css";
import adminPic1 from "../../image/admin_pc_1.png";
import adminPic2 from "../../image/admin_pc_2.png";
import adminPic3 from "../../image/admin_pc_3.png";
import adminIcon1 from "../../image/admin_icon_1.svg";
import adminIcon2 from "../../image/admin_icon_2.svg";
import adminIcon3 from "../../image/admin_icon_3.svg";
import ListItemModel from "../common/ListItemModel/ListItemModel";

const AdminSection = () => {
  const images = [adminPic1, adminPic2, adminPic3];

  const fakeListData = [
    {
      id: 1,
      icon: adminIcon1,
      title: "Real Time Operation Control ",
    },
    {
      id: 2,
      icon: adminIcon2,
      title: "High Level of Details Monitoring",
    },
    {
      id: 3,
      icon: adminIcon3,
      title: "Fast Customer Acquisition tool",
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
    <section className="admin-section">
      <Container fluid="md">
        <Row>
          <Col xs={{ span: 12, order: 2 }} sm={{ span: 6, order: 1 }} className="mt-5">
            <h3 className="mt-1 ">ADMIN PANEL</h3>
            <h1 className="mt-3  display-4">Super Powerful Real Time Dashboard </h1>
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
          <Col
            xs={{ span: 12, order: 1 }}
            sm={{ span: 6, order: 2 }}
            className="d-flex align-items-center justify-content-center"
          >
            <img src={images[currentIndex]} alt="" className=" img-fluid " />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AdminSection;
