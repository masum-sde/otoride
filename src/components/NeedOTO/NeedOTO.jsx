import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";
import "./NeedOTO.css";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
const NeedOTO = () => {
  return (
    <section className="need-oto">
      <Container className="text-alignment">
        <h2>Need OTO Applications?</h2>
        <div className="d-flex align-items-center justify-content-start">
          <a href="#contact">Contact With Us</a>
          <span>
            <FontAwesomeIcon icon={faLongArrowAltRight} size="2x" />
          </span>
        </div>
      </Container>
    </section>
  );
};

export default NeedOTO;
