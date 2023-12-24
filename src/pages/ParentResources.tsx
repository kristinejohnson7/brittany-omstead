import React from "react";
import "../sass/ParentResources.scss";
import gvlogo from "../assets/gvelem.png";
import schoologoy from "../assets/schoology.jpg";
import zoom from "../assets/zoom.png";
import eurka from "../assets/eurka.png";

export default function ParentResources() {
  return (
    <div>
      <div className="headerContainer">
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
          <p>
            Some student assignments and area content in subject folders will be
            posted here.{" "}
          </p>
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
        <div className="studentItem">
          <iframe
            src="https://drive.google.com/file/d/18nh6XHf60ShQIViQ74MggjFekbRiaBYx/preview"
            width="230"
            height="220"
            allow="autoplay"
            style={{ borderRadius: "7px" }}
            title="strengths article"
          ></iframe>

          <h3>TALENTS/STRENGTHS DESCRIPTIONS</h3>
          <p>Additional videos to support math</p>
        </div>
      </div>
      <div className="divider"></div>
      <h2 className="studentLinkHeader">Parent Newsletters:</h2>
      <div className="studentLinksContainer">
        <div className="studentItem">
          <iframe
            src="https://docs.google.com/document/d/e/2PACX-1vQq5ALjugPcYfzRMq9mnq4YhW8aLrT6cFCcBTrRkkFsFP6zVzEsSm9kPpAC6GxjD1eEWw39smRs4Pf8/pub?embedded=true"
            width="230"
            height="220"
            allow="autoplay"
            style={{ borderRadius: "7px" }}
            title="newsletter"
          ></iframe>

          <h3>Welcome Letter</h3>
        </div>
        <div className="studentItem">
          <iframe
            src="https://drive.google.com/file/d/10N79ZTZGi0EkFRE-DMK7V9F_FIgGutQd/preview"
            width="230"
            height="220"
            allow="autoplay"
            style={{ borderRadius: "7px" }}
            title="newsletter"
          ></iframe>
          <h3>Camp Naturebridge Info.</h3>
        </div>
      </div>
    </div>
  );
}
