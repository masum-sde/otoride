import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import otoWhiteLogo from "../../image/oto_white_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <img src={otoWhiteLogo} alt="otoride" className="image-size" />
        <Row className="list">
          <Col md={2}>
            <ul>
              <li className="text-white">
                <b>Products</b>
              </li>
              <li>Bike</li>
              <li>eBike</li>
              <li>Scooter</li>
              <li>Rent</li>
              <li>iOT</li>
            </ul>
          </Col>
          <Col md={2}>
            <ul>
              <li className="text-white">
                <b>Blog</b>
              </li>
              <li>Story</li>
              <li>Press</li>
            </ul>
          </Col>
          <Col md={3}>
            <ul>
              <li className="text-white">
                <b>Location</b>
              </li>
              <li>Flat B4, House 02/A, Road 1, Niketon, Gulshan 1, Dhaka - 1212</li>
            </ul>
          </Col>
          <Col md={5}>
            <ul>
              <li className="text-white">
                <b>Social Connections</b>
              </li>
              <div>
                <ul className="list-inline d-flex  ">
                  <li>
                    <FontAwesomeIcon icon={faFacebookSquare} size="2x"></FontAwesomeIcon>
                  </li>
                  <li className="social-icon d-flex align-items-center">
                    <FontAwesomeIcon icon={faTwitter} size="2x"></FontAwesomeIcon>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faLinkedinIn} size="2x"></FontAwesomeIcon>
                  </li>
                </ul>
              </div>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
