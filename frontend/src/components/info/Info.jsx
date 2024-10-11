import "./Info.css";
import Character from "../character/Character";
import Planet from "../planet/Planet";
import Weapon from "../weapon/Weapon";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";


const Info = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className='div'>
      <section id="characters">
        <h1 className='title'>Personaggi</h1>
        <div className='line'></div>
        <Character />
      </section>

      <section id="planets">
        <h1 className='title'>Pianeti</h1>
        <div className='line'></div>
        <Planet />
      </section>

      <section id="weapons">
        <h1 className='title'>Armi</h1>
        <div className='line'></div>
        <Weapon />
      </section>
    </div>
  );
};

export default Info;
