import React from "react";
import aboutImg from "../assets/bern.jpeg";
import aboutImg2 from "../assets/brittney2.jpeg";
import "../sass/About.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const RICHTEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node: any, children: any) => {
      return <p>{children}</p>;
    },
  },
};

export default function About(props: { data: { aboutMeText: any } }) {
  const { aboutMeText } = props.data;

  return (
    <div id="about">
      <div className="bgContainer">
        <div className="aboutContainer">
          <div className="heroText">
            <div className="heroTextContainer">
              <h2>About Me</h2>
              <div>
                {documentToReactComponents(aboutMeText?.json, RICHTEXT_OPTIONS)}
              </div>
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
