import React from "react";
import { Table, Container } from "react-bootstrap";
import {
  downloadLinks,
  systemRequirements,
  additionalInfo,
} from "../../helpers/const";
import "./Requirements.css";

const Requirements = () => (
  <div className="requirements-container">
    <h1 className="title">System Requirements</h1>
    <div className="line"></div>
    <Container>
      <h2>Download Links</h2>
      <div className="download-box">
        <ul className="platforms">
          {downloadLinks.map((platform, index) => (
            <li key={index} className="platform-box">
              <a href={platform.url} target="_blank" rel="noopener noreferrer">
                {platform.icon}
                <span>{platform.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <h2 className="requirements-title">Game Requirements</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Component</th>
            <th>Minimum Requirements</th>
            <th>Recommended Requirements</th>
          </tr>
        </thead>
        <tbody>
          {systemRequirements.map((req, index) => (
            <tr key={index}>
              <td>{req.component}</td>
              <td>{req.minimum}</td>
              <td>{req.recommended}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ul className="additional-info">
        {additionalInfo.map((info, index) => (
          <li key={index}>{info}</li>
        ))}
      </ul>
    </Container>
  </div>
);

export default Requirements;
