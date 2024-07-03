import React from "react";
import "./ourServices.css";
import EmpCar from "../images/black-white-luxury-car.png";
import CabCar from "../images/download.png";
import TourCab from "../images/city-tour-bus.jpg";
import OutStationCab from "../images/suv-car.jpg";
import { Link } from "react-router-dom";

export default function OurServices() {
  return (
    <section className="content_box" id="service">
      <h1 className="inc-font">OUR SERVICES</h1>
      <div className="boxes">
        <div
          class="card"
          id="card_shadow"
          style={{ width: "17rem", height: "17rem" }}
        >
          <div class="card-body">
            <img src={EmpCar} alt="Employee_Car_Img" className="img-size-1" />
            <h5 class="card-title-1">Employee Transportation</h5>
          </div>
        </div>
        <div
          class="card"
          id="card_shadow"
          style={{ width: "17rem", height: "17rem" }}
        >
          <Link to="/services/corporatecabservices" className="card_link">
            <div class="card-body">
              <img
                src={CabCar}
                alt="Corporate_Car_Img"
                className="img-size-1"
              />
              <h5 class="card-title-2">Corporate Cab Services</h5>
            </div>
          </Link>
        </div>
        <div
          class="card"
          id="card_shadow"
          style={{ width: "17rem", height: "17rem" }}
        >
        <Link to='/services/outstationcabservices' className="card_link">    
          <div class="card-body">
            <img src={TourCab} alt="Tour_Car_Img" className="img-size-2" />
            <h5 class="card-title">All Tour Services</h5>
          </div>
          </Link>
        </div>
        <div
          class="card"
          id="card_shadow"
          style={{ width: "17rem", height: "17rem" }}
        >
            <Link to='/services/outstationcabservices' className="card_link_1"> 
          <div class="card-body">
            <img
              src={OutStationCab}
              alt="Outstation_Car_Img"
              className="img-size-3"
            />
            <h5 class="card-title">Outstation Transportation</h5>
          </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
