import React from "react";
import "../sass/ParentResources.scss";
import gvlogo from "../assets/gvelem.png";

export default function ParentResources() {
  return (
    <div>
      <div className="hwrkHeaderContainer">
        <div className="bgContainer">
          <h2>Parent Resources</h2>
          <p>
            Welcome to our Parent Resources section! Explore helpful guides,
            tips for fostering a positive learning environment at home, and stay
            informed about upcoming events and curriculum updates. Together, we
            can ensure a seamless collaboration between home and school,
            nurturing a thriving educational experience for your child.
          </p>
        </div>
      </div>
      <h2 className="studentLinkHeader">Parent Links:</h2>
      <div className="studentLinksContainer">
        <a
          href="https://gves.srvusd.net/"
          target="_blank"
          rel="noreferrer"
          className="linkContainer"
        >
          <img src={gvlogo} alt="student resource" />
          <p>GREEN VALLEY ELEMENTARY</p>
        </a>{" "}
      </div>
      <div className="divider"></div>
      <h2 className="studentLinkHeader">Parent Newsletter:</h2>
      <div className="docContainer">
        <iframe
          width="800"
          height="700"
          title="newsletter "
          src="https://docs.google.com/document/d/e/2PACX-1vRedy4gMSURLqqKhnM1q_LpIeSF1CSaGyae75TP4eC3hap-tCeOgTsF7gpMoUqxZYWOeTJ41E1qn8fo/pub?embedded=true"
        ></iframe>
      </div>
    </div>
  );
}
