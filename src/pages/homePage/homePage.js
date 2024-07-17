import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import SlideImage from "../slideImage/imageSlide";
import MenuAboutUs from "../about/about";
import AnimatedCounter from "../animatedCounter/animatedCounter";
// import OurServices from '../services/ourServices';
import OurServicesOne from "../services/ourServicesOne";
import OurFleet from "../ourFleet/ourFleet";
import Clients from "../clients/clients";
import Contact from "../contact/contact";
import Logo from "../images/OFFICE LOGO-Recreate_withoutbackground.png"; // Adjust the import path for your logo
import { Link } from "react-router-dom";
import NavDropdownHover from "./navbardropdown";
import "./homePage.css";

function HomePage() {
  return (
    <>
       <Navbar expand="lg"  className="fs-5 p-2" id="bg_color">
       <Container className="gap-5 fw-bold">
      <Navbar.Brand href="#home">
      <Image src={Logo} width={140} height={100} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto my-2 my-lg-0 gap-4"
              style={{ maxHeight: "100px" }}
              navbarScroll>
          <Nav.Link href="#home" id="nav-link-border">Home</Nav.Link>
          <NavDropdownHover title="About Us" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#ourteam" className="color-hover">Our Team</NavDropdown.Item>
            <NavDropdown.Item href="#privacypolicy" className="color-hover">Privacy Policy</NavDropdown.Item>
            <NavDropdown.Item className="color-hover">
              <Link to="/about/termsandconditions" className="dd_link">
                Terms & Conditions
              </Link>
            </NavDropdown.Item>
          </NavDropdownHover>
          <Link to="/services/servicepage" className="nav_link">Services</Link>
          <Nav.Link href="#client">Clients</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
          <NavDropdownHover title="Gallery" id="navbarScrollingDropdown">
            <NavDropdown.Item className="color-hover"><Link to="gallery/photogallery" className="img_link">Photo Gallery</Link></NavDropdown.Item>
            {/* <NavDropdown.Item href="#privacypolicy">Video Gallery</NavDropdown.Item> */}
          </NavDropdownHover>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
      <SlideImage />
      <MenuAboutUs />
      <AnimatedCounter />
      {/* <OurServices /> */}
      <OurServicesOne />
      <OurFleet />
      <Clients />
      <Contact />
    </>
  );
}

export default HomePage;
