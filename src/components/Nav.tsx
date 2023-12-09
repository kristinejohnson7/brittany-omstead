import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import ScrollHandler from "./ScrollHandler";
// import { ReactComponent as Bars } from "../../assets/bars.svg";
import "../sass/Nav.scss";

export default function Nav() {
  const navRef = useRef();

  const showNavBar = () => {
    // navRef?.current?.classList?.toggle("responsive_nav");
  };

  const hideBars = () => {
    // navRef.current.setAttribute("class", "navbar-collapse collapse");
  };

  return (
    <Navbar sticky="top">
      <header className="navBar">
        <nav
          // ref={navRef}
          className="collapse navbar-collapse navOptions navbar-toggleable-lg"
          id="navbarCollapse"
        >
          <ul className="navList">
            {/* {leftNavOptions.map((item, index) => ( */}
            <li>
              <Link to={"/homework"} onClick={hideBars}>
                Schedule & Homework
              </Link>
            </li>{" "}
            <li>
              <Link to={"/student-resources"} onClick={hideBars}>
                Student Resources
              </Link>
            </li>
            {/* ))} */}
            <div className="navImg">
              <NavLink to="/">
                <img src={logo} alt="" />
              </NavLink>
            </div>
            <li>
              <Link to={"/parent-resources"} onClick={hideBars}>
                Parent Resources
              </Link>
            </li>
            <li>
              <ScrollHandler>
                <Link to={"/#about"} onClick={hideBars}>
                  About
                </Link>
              </ScrollHandler>
            </li>
            {/* {rightNavOptions.map((item, index) => (
              <li key={index}>
                <Link
                  to={item === "blog" ? "/blog" : `/#${item}`}
                  onClick={hideBars}
                >
                  {item.toUpperCase()}
                </Link>
              </li>
            ))} */}
          </ul>
          {/* <button
            className="nav-btn nav-close-btn"
            aria-label="Close Navigation"
            onClick={showNavBar}
          >
            X
          </button> */}
        </nav>
        {/* <button
          className="nav-btn"
          aria-label="Open Navigation"
          onClick={showNavBar}
        > */}
        {/* <Bars className="icon" width="20px" /> */}
        {/* </button> */}
      </header>
    </Navbar>
  );
}
