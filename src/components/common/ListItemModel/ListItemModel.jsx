import React from "react";
import { Col, Row } from "react-bootstrap";
import "./ListItemModel.css";
const ListItemModel = ({ item }) => {
  const { icon, title } = item;
  return (
    <Row className="mt-4 d-flex align-items-center justify-content-center">
      <Col md={2}>
        <img src={icon} alt="icon1" />
      </Col>
      <Col md={10}>
        <p>{title}</p>
      </Col>
    </Row>
  );
};

export default ListItemModel;
