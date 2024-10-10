import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Weapon.css";

const Weapon = ({ id }) => {
  const [weapons, setWeapons] = useState([]);
  const fetchWeapons = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/weapons");
      return response.data;
    } catch (error) {
      throw new Error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchWeapons().then((data) => setWeapons(data));
  }, []);

  return (
    <Container id={id} className="weapons-container">
      <h2 className="text-center mb-4">Weapons</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {weapons && weapons.length > 0 && weapons.map((weapon) => (
          <Col key={weapon._id}>
            <Card className="h-100 weapon-card">
              <Card.Body>
                <Card.Title>{weapon.name}</Card.Title>
                <Card.Text>{weapon.description}</Card.Text>
                {weapon.munitions && (
                  <Card.Text className="munitions">
                    Munitions: {weapon.munitions}
                  </Card.Text>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Weapon;
