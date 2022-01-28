import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";
import "./NeedOTO.css";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
const NeedOTO = () => {
  return (
    <section className="need-oto">
      <Container fluid="md">
        <h2 className="display-2">Need OTO Applications?</h2>
        <div data-aos="fade-right" id="contact-link" className="d-flex align-items-center justify-content-start">
          <a href="#contact" className="display-2">
            Contact With Us
          </a>
          <span data-aos="fade-left">
            <FontAwesomeIcon icon={faLongArrowAltRight} size="2x" />
          </span>
        </div>
      </Container>
    </section>
  );
};

export default NeedOTO;
