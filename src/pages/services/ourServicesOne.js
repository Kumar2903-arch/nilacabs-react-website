import React from "react";
import "./ourServicesOne.css";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import EmpCar from "../images/Emp-Car.png";
import CabCar from "../images/cab.png";
import TourCab from "../images/city-tour-bus.jpg";
import OutStationCab from "../images/suv-car.jpg";
import { Link } from "react-router-dom";

export default function OurServicesOne() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      delay: 500,
    });
  }, []);
  return (
    <div className="box_images" id="OurServiceOne">
        <h1 className="inc-font">OUR SERVICES</h1>
        <div className="imgs">
        <Link to="/services/employeecabservices" className="service_card_link">
      <figure className="snip1543" data-aos="zoom-in">
        <img
          src={EmpCar}
          alt="sample108"
        />
        <figcaption>
          <h3>Employee Transportation</h3>
          {/* <p>
           As per your requirment and trip based
          </p> */}
        </figcaption>
        <a href="#"></a>
      </figure>
      </Link>
      {/* <figure className="snip1543" data-aos="zoom-in">
        <img
          src={CabCar}
          alt="sample101"
        />
        <figcaption>
          <h3>Corporate Cab Services</h3>
          <p>
          As per your requirment and trip based
          </p>
        </figcaption>
        <a href="#"></a>
      </figure> */}
       <Link to="/services/corporatecabservices" className="service_card_link">
      <figure className="snip1543 img-heig" data-aos="zoom-in">
        <img
          src={TourCab}
          alt="sample101"
        />
        <figcaption>
          <h3>Local Day Rent Trip</h3>
          
        </figcaption>
        <a href="#"></a>
      </figure>
      </Link>
      <Link to="/services/outstationcabservices" className="service_card_link">
      <figure className="snip1543" data-aos="zoom-in">
      <img
        src={OutStationCab}
        alt="sample101"
      />
      <figcaption>
        <h3>Outstation Transportation</h3>
        {/* <button className="custom-btn btn-12"><span>Click!</span><span>Read More</span></button> */}
      </figcaption>
      <a href="#"></a>
      
    </figure>
      </Link>
      </div>
    </div>
  );
}
