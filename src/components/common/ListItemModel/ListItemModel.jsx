import React from "react";
import { Col, Row } from "react-bootstrap";
import "./ListItemModel.css";
const ListItemModel = ({ item }) => {
  const { icon, title } = item;
  return (
    <Row className="mt-4 list-item-model">
      <Col xs={2} className="d-flex align-items-center justify-content-end">
        <img src={icon} alt="icon1" className="img-fluid" />
      </Col>
      <Col xs={10} className="d-flex align-items-center justify-content-start">
        <p>{title}</p>
      </Col>
    </Row>
  );
};

export default ListItemModel;
