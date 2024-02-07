import React from "react";
import hero from "../assets/hero.jpg";
import "../sass/Hero.scss";

export default function Hero() {
  return (
    <section className="heroSection">
      <div className="heroContainer">
        <img src={hero} alt="painting" />
        <div className="heroText">
          <h2>
            Empowering Minds, Inspiring Futures: <br /> Where Education Takes
            Flight!
          </h2>
        </div>
      </div>
    </section>
  );
}
