import React from 'react';
import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import SlideImage from '../slideImage/imageSlide';
import MenuAboutUs from '../about/about';
import AnimatedCounter from '../animatedCounter/animatedCounter';
import OurServices from '../services/ourServices';
import OurFleet from '../ourFleet/ourFleet';
import Clients from '../clients/clients';
import Contact from '../contact/contact';
import Logo from '../images/OFFICE LOGO-Recreate_withoutbackground.png'; // Adjust the import path for your logo
import { Link } from 'react-router-dom';
import './homePage.css';

function App() {
  return (<>
      <Navbar expand="lg" className="bg_color fs-5 p-2">
        <Container className="gap-5 fw-bold">
          <Navbar.Brand>
            <Image src={Logo} width={140} height={100} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 gap-4" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link>Home</Nav.Link>
              <NavDropdown title="About Us" id="navbarScrollingDropdown">
                {/* <NavDropdown.Item>Our Team</NavDropdown.Item>
                <NavDropdown.Item>Privacy Policy</NavDropdown.Item> */}
                <NavDropdown.Item><Link to='/about/termsandconditions' className='dd_link'>Terms & Conditions</Link></NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>Services</Nav.Link> 
              <Nav.Link>Clients</Nav.Link>
              <Nav.Link>Contact Us</Nav.Link>
              <Nav.Link>Gallery</Nav.Link>
              {/* <NavDropdown title="Gallery" id="navbarScrollingDropdown">
                <NavDropdown.Item>Photo Gallery</NavDropdown.Item>
                <NavDropdown.Item>Video Gallery</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
          {/* <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-dark">Search</Button>
          </Form> */}
        </Container>
      </Navbar>
      <SlideImage />
      <MenuAboutUs />
      <AnimatedCounter />
      <OurServices />
      <OurFleet />
      <Clients />
      <Contact />
      </>
  );
}

export default App;
