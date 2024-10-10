import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import "./Character.css";

const Character = ({ id }) => {
  const [characters, setCharacters] = useState([]);
  const fetchCharacters = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/characters");
      return response.data;
    } catch (error) {
      throw new Error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchCharacters().then((data) => setCharacters(data));
  }, []);

  return (
    <Container id={id} className="characters-container">
      <h2 className="text-center mb-4">Characters</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {characters &&
          characters.length > 0 &&
          characters.map((character) => (
            <Col key={character._id}>
              <Card className="h-100 character-card">
                {character.img && (
                  <Card.Img
                    variant="top"
                    src={character.img}
                    alt={character.name}
                  />
                )}
                <Card.Body>
                  <Card.Title>{character.name}</Card.Title>
                  <Card.Text>{character.description}</Card.Text>
                  <Card.Text className="role">Role: {character.role}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Character;
