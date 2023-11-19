import React from "react";
import classImg from "../assets/class.jpeg";
import "../sass/LearnMore.scss";

export default function LearnMore() {
  return (
    <section>
      <div className="learnMoreContainer">
        <div className="learnMoreText">
          <div className="learnText">
            <h2>
              Explore My Teaching Journey: <br /> Learn More about My Passion
              for Education
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati, doloribus sit aspernatur placeat sed error quam iste
              assumenda labore, quasi, a esse non expedita ratione aliquam ex
              porro eos. Commodi. Corporis dolore provident enim. Laudantium
              ipsam at voluptas laboriosam voluptatibus, est saepe. Quidem
              voluptatum voluptas voluptatem. Fuga dolorem modi, magni expedita
              consequuntur quia praesentium aliquam distinctio necessitatibus
              cupiditate rem. Molestias.
            </p>
          </div>
        </div>
        <div className="learnMoreImg">
          <img src={classImg} alt="brittany omstead" />
        </div>
      </div>
    </section>
  );
}
