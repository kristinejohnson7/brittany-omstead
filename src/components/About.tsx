import React from "react";
import aboutImg from "../assets/bern.jpeg";
import aboutImg2 from "../assets/brittney2.jpeg";
import "../sass/About.scss";

export default function About() {
  return (
    <div id="about">
      <div className="bgContainer">
        <div className="aboutContainer">
          <div className="heroText">
            <div className="heroTextContainer">
              <h2>About Me</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Obcaecati, doloribus sit aspernatur placeat sed error quam iste
                assumenda labore, quasi, a esse non expedita ratione aliquam ex
                porro eos. Commodi. Corporis dolore provident enim. Laudantium
                ipsam at voluptas laboriosam voluptatibus, est saepe. Quidem
                voluptatum voluptas voluptatem. Fuga dolorem modi, magni
                expedita consequuntur quia praesentium aliquam distinctio
                necessitatibus cupiditate rem. Molestias.
              </p>
            </div>
          </div>
          <div className="aboutImg">
            <img src={aboutImg} alt="brittany omstead" className="mainImg" />
            <img src={aboutImg2} alt="brittany omstead" className="secondImg" />
          </div>
        </div>
      </div>
    </div>
  );
}
