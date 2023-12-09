import React from "react";
import "../sass/ParentResources.scss";
import gvlogo from "../assets/gvelem.png";
import schoologoy from "../assets/schoology.jpg";
import zoom from "../assets/zoom.png";
import eurka from "../assets/eurka.png";

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
      <div className="studentLinksContainer parentContainer">
        <div className="studentItem">
          <a
            href="https://gves.srvusd.net/"
            target="_blank"
            rel="noreferrer"
            className="linkContainer"
          >
            <img src={gvlogo} alt="parent resource" />
          </a>
          <h3>GREEN VALLEY ELEMENTARY</h3>
        </div>
        <div className="studentItem">
          <a
            href="https://classroom.google.com/"
            target="_blank"
            rel="noreferrer"
            className="linkContainer"
          >
            <img src={schoologoy} alt="parent resource" />
          </a>
          <h3>SCHOOLOGY</h3>
        </div>{" "}
        <div className="studentItem">
          <a
            href="https://srvusd-net.zoom.us/j/6572162250?pwd=K2IyUysvbEJTN1l2WFBOcGQ3dFpyUT09#success"
            target="_blank"
            rel="noreferrer"
            className="linkContainer"
          >
            <img src={zoom} alt="parent resource" />
          </a>
          <h3>ZOOM</h3>
          <p>
            Zoom may be used sometimes for parent conferences or parent
            meetings.
          </p>
        </div>{" "}
        <div className="studentItem">
          <a
            href="https://srvusd-net.zoom.us/j/6572162250?pwd=K2IyUysvbEJTN1l2WFBOcGQ3dFpyUT09#success"
            target="_blank"
            rel="noreferrer"
            className="linkContainer"
          >
            <img src={eurka} alt="parent resource" />
          </a>
          <h3>ENGAGE EUREKA MATH</h3>
          <p>Additional videos to support math</p>
        </div>
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
