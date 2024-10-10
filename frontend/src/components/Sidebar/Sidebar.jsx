import React from "react";
import ProfileList from "../ListProfile/ProfileList";
import "./Sidebar.css";
import { Row, Col } from "react-bootstrap";

const Sidebar = ({ currentUserId }) => (
  <Row>
    <Col xs={12}>
      <ProfileList excludeUserId={currentUserId} />
    </Col>
  </Row>
);

export default Sidebar;
