import { Container } from "react-bootstrap";
import "./Info.css";
import Character from "../character/Character";
import Planet from "../planet/Planet";
import Weapon from "../weapon/Weapon";

const Info = () => {
  return (
    <>
      <Container className="mb-4">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link" href="#characters">
              Characters
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#planets">
              Planets
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#weapons">
              Weapons
            </a>
          </li>
        </ul>
      </Container>

        <Character id="characters" />
        <Planet id="planets" />
        <Weapon id="weapons" />
    </>
  );
};

export default Info;
