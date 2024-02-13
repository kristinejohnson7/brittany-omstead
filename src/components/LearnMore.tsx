import React from "react";
import "../sass/LearnMore.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const RICHTEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node: any, children: any) => {
      return <p style={{ marginBottom: "10px" }}>{children}</p>;
    },
  },
};

export default function LearnMore(props: {
  data: { learnMoreTitle: string; learnMoreText: any; learnMoreImage: any };
}) {
  const { learnMoreTitle, learnMoreText, learnMoreImage } = props.data;

  return (
    <section>
      <div className="learnMoreContainer">
        <div className="learnMoreText">
          <div className="learnText">
            <h2>{learnMoreTitle}</h2>
            <div>
              {documentToReactComponents(learnMoreText?.json, RICHTEXT_OPTIONS)}
            </div>
          </div>
        </div>
        <div className="learnMoreImg">
          <img src={learnMoreImage.url} alt="brittany omstead" />
        </div>
      </div>
    </section>
  );
}
