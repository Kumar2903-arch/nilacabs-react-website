import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import SwiftDzire from "../images/swift_dzire.png";
import EicherBus from "../images/Eicher-bus.png";
import Tempo from "../images/Tempo-traveller.png";
import "./ourFleet.css";

function CarouselFadeExample() {
  return (
    <div className="bg-img">
      <h1 className="text-center pd-4">OUR FLEETS</h1>
      <Carousel fade className="w-100 pt-3">
        <Carousel.Item
          interval={1500}
          className="img_slide d-flex justify-content-center align-items-center flex-column"
        >
          <img className="curve_box" src={SwiftDzire} alt="SwiftDzire" />
          <Carousel.Caption className='w-50 content_down' >
          <h3>Swift Dzire</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          interval={1500}
          className="img_slide d-flex justify-content-center align-items-center flex-column"
        >
          <img className="curve_box" src={EicherBus} alt="Bus" />
          <Carousel.Caption className='w-50 content_down'>
          <h3>Bus</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          interval={1500}
          className="img_slide d-flex justify-content-center align-items-center flex-column"
        >
          <img className="curve_box" src={Tempo} alt="Tempo" />
          <Carousel.Caption className='w-50 content_down'>
          <h3>Tempo Traveller</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselFadeExample;
