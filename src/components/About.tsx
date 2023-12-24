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
              <p>Hello, amazing Green Valley parents and students! </p>
              <p>
                My adventure in teaching began at a young age when I established
                my teaching business at 15 teaching swimming lessons. In my
                career, I&#39;ve had the privilege of collaborating with film
                productions as a studio teacher celebrating the art of
                storytelling through motion pictures. Since then, my path has
                been diverse, from teaching across Canada on features &amp;
                tv-series.
              </p>
              <p>
                I had a traveling classroom including a French colonial village
                for National Geographic, in the world of nemo in Slumberland.
              </p>
              <p>
                Throughout these experiences, the joy of learning has remained a
                constant. Teaching English and music lessons in Central America,
                serving as a studio teacher for companies like Netflix, Happy
                Madison, and Disney+, and instructing at Convent of the Sacred
                Heart in San Francisco, have all enriched my teaching toolbox,
                particularly influencing my responsive classroom approach.
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
