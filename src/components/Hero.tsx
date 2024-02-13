import React from "react";
import "../sass/Hero.scss";

export default function Hero(props: {
  data: { heroTitle: string; heroImage: any };
}) {
  const { heroTitle, heroImage } = props.data;

  return (
    <section className="heroSection">
      <div className="heroContainer">
        <img src={heroImage.url} alt="painting" />
        <div className="heroText">
          <h2>{heroTitle}</h2>
        </div>
      </div>
    </section>
  );
}
