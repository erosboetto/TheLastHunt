import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { homeContent } from "../../helpers/const";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Video Section */}
      <div className="video-container">
        <video
          className="home-video"
          src={require("../../assets/video/video.mp4")}
          controls
          muted
          autoPlay
          loop
          onEnded={(e) => e.target.load()}
        />
      </div>

      <div className="line" />
      <Container className="home-desc">
        <h1>{homeContent.title}</h1>
        <p>{homeContent.description}</p>
      </Container>
      <div className="download">
        <Button className="main-div">
          <Link to="/requirements" className="link">
            <h2>{homeContent.downloadButtonText}</h2>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
