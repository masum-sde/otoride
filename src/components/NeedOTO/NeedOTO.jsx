import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import "./NeedOTO.css";

const NeedOTO = () => {
  return (
    <section className="need-oto">
      <Container fluid="md">
        <h2 className="display-3">Ready to launch your business with Most advanced platform?</h2>
        <div data-aos="fade-right" id="contact-link" className="d-flex align-items-center justify-content-start">
          <a href="#contact" className="display-3">
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
