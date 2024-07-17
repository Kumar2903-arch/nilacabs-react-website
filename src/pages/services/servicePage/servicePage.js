import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Logo from "../images/OFFICE LOGO-Recreate_withoutbackground.png";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import NavDropdownHover from "../../homePage/navbardropdown";
import "./servicePage.css";

export default function ServicePage() {
  return (
    <div>
      <Navbar expand="lg" className="fs-5 p-2 service_home_page">
        <Container className="gap-5 fw-bold">
          <Navbar.Brand href="#home">
            <Image src={Logo} width={140} height={100} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto my-2 my-lg-0 gap-4"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/homePage" id="nav-link-border">
                Home
              </Nav.Link>
              <NavDropdownHover title="About Us" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#ourteam" className="color-hover">
                  Our Team
                </NavDropdown.Item>
                <NavDropdown.Item href="#privacypolicy" className="color-hover">
                  Privacy Policy
                </NavDropdown.Item>
                <NavDropdown.Item className="color-hover">
                  <Link to="/about/termsandconditions" className="dd_link">
                    Terms & Conditions
                  </Link>
                </NavDropdown.Item>
              </NavDropdownHover>
              <Nav.Link href="#OurServiceOne">Services</Nav.Link>
              <Nav.Link href="#client">Clients</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
              <NavDropdownHover title="Gallery" id="navbarScrollingDropdown">
                <NavDropdown.Item className="color-hover">
                  <Link to="gallery/photogallery" className="img_link">
                    Photo Gallery
                  </Link>
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="#privacypolicy">Video Gallery</NavDropdown.Item> */}
              </NavDropdownHover>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <div className="background-container">
        <div className="background-image"></div>
        <div className="content">
          <h1>Services</h1>
          <p>
            Welcome to our Employee Cab Services, your reliable and comfortable
            transportation solution designed specifically for our valued
            employees. We understand the importance of safe and convenient
            commuting, and we are committed to providing top-notch service to
            meet your needs.
          </p>
        </div>
      </div> */}
      <div className="background-container">
      <div className="background-image"></div>
      <div className="background-overlay"></div>
      <div className="content">
        <h1>Employee Cab Services</h1>
        <p>Reliable and comfortable transportation for our valued employees.</p>
        <ul>
          <li>24/7 availability</li>
          <li>Safe and sanitized cabs</li>
          <li>Real-time tracking</li>
          <li>Easy booking through our app</li>
        </ul>
      </div>
    </div>
    </div>
  );
}
