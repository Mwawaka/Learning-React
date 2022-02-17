import React from "react";
import grid from "./grid.png";
function Hero() {
  return (
    <section className="gridy">
      <div className="gridy--photo">
        
        <img src={grid} alt="Photogrid images" />
      </div>

      <h1 className="h1--title">Online Experiences</h1>
      <p className="p--desc">
        Join unique interactive activities led by one of a kind hosts-all
        without leaving the comfort of your home
      </p> 
    </section>
  );
}

export default Hero;
