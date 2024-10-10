import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import { baseUrl } from "../../helpers/const";
import "./Planet.css";

const Planet = ({ id }) => {
  const [planets, setPlanets] = useState([]);
  const fetchPlanets = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/planets`);
      return response.data;
    } catch (error) {
      throw new Error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchPlanets().then((data) => setPlanets(data));
  }, []);

  return (
    <Container id={id} className="planets-container">
      <h2 className="text-center mb-4">Planets</h2>
      <Row className="g-4">
        {planets &&
          planets.length > 0 &&
          planets.map((planet) => (
            <Col key={planet._id} xs={12} md={6} lg={4}>
              <Card className="planet-card">
                <Card.Img
                  variant="top"
                  src={planet.src}
                  alt={planet.name}
                  className="planet-image"
                />
                <Card.Body className="caption-background">
                  <Card.Title className="caption-title">
                    {planet.name}
                  </Card.Title>
                  <Card.Text className="desc">{planet.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Planet;
