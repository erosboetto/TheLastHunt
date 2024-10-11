import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import "./Character.css";
import { baseUrl } from "../../helpers/const";


const Character = ({ id }) => {
  const [characters, setCharacters] = useState([]);
  const fetchCharacters = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/characters`);
      return response.data;
    } catch (error) {
      throw new Error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchCharacters().then((data) => setCharacters(data));
  }, []);

  return (
    <Container id={id} xs={1} md={2} lg={3} className="characters-container">
      {characters &&
        characters.length > 0 &&
        characters.map((character) => (
          <div key={character._id} className="d-flex div-img">
            {character.img && (
              <img
                variant="top"
                className="image"
                src={character.img}
                alt={character.name}
              />
            )}
            <div className="div-details">
              <h2>{character.name}</h2>
              <p>{character.description}</p>
            </div>
          </div>
        ))}
    </Container>
  );
};

export default Character;
