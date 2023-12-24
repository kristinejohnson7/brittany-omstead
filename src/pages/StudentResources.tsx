import React from "react";
import "../sass/StudentResources.scss";
import schoologoy from "../assets/schoology.jpg";
import xtra from "../assets/xtra.png";
import khan from "../assets/khan.png";
import engage from "../assets/engage.png";
import signIn from "../assets/googleSignIn.png";
import math from "../assets/math.png";
import srvusd from "../assets/srvusd.png";

export default function StudentResources() {
  return (
    <div className="studentPage">
      <div className="headerContainer">
        <div className="bgContainer">
          <h2>Student Resources</h2>
          <p>
            Welcome to our Student Resources hub, a dedicated space designed to
            empower and support your learning. Here, you'll find a treasure
            trove of tools and materials carefully curated to enhance your
            learning experience.
          </p>
        </div>
      </div>
      <div className="resourceHeader">
        <h2>Before you Begin:</h2>
        <ol className="listStyles">
          <li>
            <p>
              You should log into you student account through Google. To do this
              from home, go to{" "}
              <a href="www.google.com" target="_blank">
                Google
              </a>{" "}
              then click on the waffle.
            </p>
          </li>
          <li>
            <p>
              {" "}
              You will be prompted to sign in. Use your student log-in
              information.
            </p>
            <p style={{ margin: "10px 0" }}>
              As a reminder it looks like this:
            </p>
            <ul
              style={{ marginLeft: "20px", marginTop: "20px", fontWeight: 700 }}
            >
              <li> Login: (student ID #)@students.srvusd.net</li>
              <li>Password: Your individual set password</li>
            </ul>
            <p className="signInPic">
              <img src={signIn} alt="sign in example" />
            </p>
            <p>
              If you need to reset please email me or let me know in class and I
              can help you.
            </p>
          </li>
          <li>
            Once you are logged into Google, you should have access to most of
            the platforms listed below.
          </li>
        </ol>
      </div>
      <div className="divider"></div>
      <h2 className="studentLinkHeader">Student Links:</h2>
      <div className="studentLinksContainer" style={{ marginBottom: 70 }}>
        <div className="studentItem">
          <a
            href="https://classroom.google.com/"
            target="_blank"
            rel="noreferrer"
            className="linkContainer"
          >
            <img src={schoologoy} alt="student resource" />
          </a>
          <h3>SCHOOLOGY</h3>
          <p>Find and turn in some assignment here.</p>
        </div>
        <div className="studentItem">
          <a
            href="https://sites.google.com/srvusd.net/gv5thgrademath/home"
            target="_blank"
            rel="noreferrer"
            className="linkContainer"
          >
            <img src={math} alt="student resource" />
          </a>
          <h3>MATH WEBSITE</h3>
          <p>
            This is our Modern Classroom website and links to problem sets and
            exit tickets.
          </p>
        </div>
        <div className="studentItem">
          <a
            href="https://docs.google.com/presentation/d/1nZX6vb0FB0dkwahk9GNvGQLuqZpOc3Ad5uROjmYYCMw/edit#slide=id.gab4e1e7158_0_523"
            target="_blank"
            rel="noreferrer"
            className="linkContainer"
          >
            <img src={engage} alt="student resource" />
            <h3>ENGAGE NY VIDEOS</h3>
            <p>Eureka Math Modules </p>
          </a>
        </div>
        <div className="studentItem">
          <a
            href="https://xtramath.org/#/signin/student_other"
            target="_blank"
            rel="noreferrer"
            className="linkContainer"
          >
            <img src={xtra} alt="student resource" />
          </a>
          <h3>XTRA MATH</h3>
          <p>Practice your multiplication and division facts</p>
        </div>
        <div className="studentItem">
          <a
            href="https://www.khanacademy.org/"
            target="_blank"
            rel="noreferrer"
            className="linkContainer"
          >
            <img src={khan} alt="student resource" />
            <h3>KHAN ACADEMY</h3>
            <p>Khan course lessons and practice </p>
          </a>
        </div>
        <div className="studentItem">
          <a
            href="https://launchpad.classlink.com/srvusd?loggedout=1"
            target="_blank"
            rel="noreferrer"
            className="linkContainer"
          >
            <img src={srvusd} alt="student resource" />
            <h3>SRVUSD PORTAL</h3>
          </a>
        </div>
      </div>
    </div>
  );
}
