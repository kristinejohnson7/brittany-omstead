import React from "react";
import "../sass/StudentResources.scss";
import schoologoy from "../assets/schoology.jpg";
import xtra from "../assets/xtra.png";
import khan from "../assets/khan.png";
import engage from "../assets/engage.png";

export default function StudentResources() {
  return (
    <div>
      <div className="headerContainer">
        <div className="bgContainer">
          <h2>Student Resources</h2>
          <p>
            Welcome to our Student Resources hub, a dedicated space designed to
            empower and support our students on their educational journey. Here,
            you'll find a treasure trove of tools and materials carefully
            curated to enhance your learning experience.
          </p>
        </div>
      </div>
      <div className="resourceHeader">
        <h2>Before you Begin:</h2>
        <ol>
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
              information. As a reminder it looks like this:
            </p>
            <p>
              Login: (Student ID number)@students.srvusd.net Password: Your
              individually set password If you have forgotten your login or
              password, let me know (Use "I Need Help Button" above) and I will
              help.{" "}
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
        <a
          href="https://classroom.google.com/"
          target="_blank"
          rel="noreferrer"
          className="linkContainer"
        >
          <img src={schoologoy} alt="student resource" />
          <p>SCHOOLOGOY</p>
        </a>{" "}
        <a
          href="https://docs.google.com/presentation/d/1nZX6vb0FB0dkwahk9GNvGQLuqZpOc3Ad5uROjmYYCMw/edit#slide=id.gab4e1e7158_0_523"
          target="_blank"
          rel="noreferrer"
          className="linkContainer"
        >
          <img src={engage} alt="student resource" />
          <p>ENGAGE NY VIDEOS</p>
        </a>
        <a
          href="https://xtramath.org/#/signin/student_other"
          target="_blank"
          rel="noreferrer"
          className="linkContainer"
        >
          <img src={xtra} alt="student resource" />
          <p>XTRA MATH</p>
        </a>{" "}
        <a
          href="https://www.khanacademy.org/"
          target="_blank"
          rel="noreferrer"
          className="linkContainer"
        >
          <img src={khan} alt="student resource" />
          <p>KHAN ACADEMY</p>
        </a>
      </div>
    </div>
  );
}
