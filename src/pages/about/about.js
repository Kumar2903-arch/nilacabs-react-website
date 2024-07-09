import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Image } from "react-bootstrap";
import CardsImg from "../images/cars.jpeg";
import './about.css';

export default function MenuAboutUs() {
  return (
    <Container id="about" className="container-fluid">
      <Card className="d-flex flex-row mt-3 justify-content-center align-items-center box flex-wrap" id="align_box">
        <Image src={CardsImg} alt="about_us_car_image" className="img_width"/>
        <Card.Body className="d-flex justify-content-center flex-column align-items-center flex-wrap">
            <Card.Body className="d-flex flex-column justify-content-start align-items-start flex-wrap">
            <Card.Text className="fsize">ABOUT US</Card.Text>
            </Card.Body>
            <Card.Body className="d-flex flex-column justify-content-start align-items-start flex-wrap">
            <Card.Text className="fsize_1">Corporate Cab Services</Card.Text>
            </Card.Body>
          <Card.Text className="ms-5 fs-5 fs-md-2" id="fsize_2">
            Nila cabs established in the year 2009. The main objective of the
            company is to take the pain away from commuters. Initially we
            started with ETS (Employee transport services).We expertise of
            providing Ground Transport Services having a niche in the market
            with Strict Compliance Adherence.Nila Cabs provides an end-to-end
            solution for employee transportation through the combination of
            Automated and Manual process.Our product has an advantage of very
            less human intervention in day-to-day activities and results into
            accurate data and transparent operations.Nila Cabs today transports
            around 5000 employees with 150+ Vehicles daily and operates across
            Chennai, Coimbatore, Tiruchirappalli and plans to expand to various
            cities soon.Nila Cabs team has close to 30+ professionals and 100+
            channel partners to manages the Business Services.
          </Card.Text>
          <button class="custom-btn btn-12"><span>Click!</span><span>Read More</span></button>
        </Card.Body>
      </Card>
    </Container>
  );
}
