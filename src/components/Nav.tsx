import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import ScrollHandler from "./ScrollHandler";
import "../sass/Nav.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavLink } from "react-bootstrap";

export default function NavBar() {
  return (
    <header className="navBar">
      <div className="navImg">
        <NavLink as={Link} to="/">
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <Navbar sticky="top" collapseOnSelect expand="sm">
        <Navbar.Toggle
          aria-controls="navbarScroll"
          data-bs-target="#navbarScroll"
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav>
            <NavLink
              eventKey="1"
              as={Link}
              to="/homework"
              bsPrefix="customLink"
            >
              Schedule & Homework
            </NavLink>
            <NavLink
              eventKey="2"
              as={Link}
              to="/student-resources"
              bsPrefix="customLink"
            >
              Student Resources
            </NavLink>{" "}
            <NavLink
              eventKey="3"
              as={Link}
              to="/parent-resources"
              bsPrefix="customLink"
            >
              Parent Resources
            </NavLink>{" "}
            <ScrollHandler>
              <NavLink
                eventKey="3"
                as={Link}
                to="/#about"
                bsPrefix="customLink"
              >
                About
              </NavLink>
            </ScrollHandler>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
