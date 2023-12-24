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
              For me, learning is an entryway to boundless growth and
              transformation. As an educator, my mission is to cultivate a
              nurturing environment where every student feels valued, inspired,
              and encouraged to embrace the joy of learning. I believe in
              instilling a growth mindset, empowering students to tackle
              challenges with positivity and resilience while teaching values
              that promote exploration, critical thinking, and personal growth.
            </p>
            <p>
              I aspire to create a classroom community where kindness, respect,
              and integrity form the foundational pillars of a successful
              learning experience. I aim to celebrate individual strengths,
              empower students and foster a supportive environment where
              everyone roots for each other&#39;s success. My approach is
              holistic, ensuring each student thrives academically, socially,
              and emotionally.
            </p>
            <p>
              Together, let&#39;s embark on an exciting journey of discovery and
              growth, nurturing the unique potential within each student.
              I&#39;m excited about the possibilities that lie ahead!&quot;
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
