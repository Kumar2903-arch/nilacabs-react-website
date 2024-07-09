import React from "react";
import "./ourServicesOne.css";
import EmpCar from "../images/Emp-Car.png";
import CabCar from "../images/cab.png";
import TourCab from "../images/city-tour-bus.jpg";
import OutStationCab from "../images/suv-car.jpg";

export default function OurServicesOne() {
  // (".hover").mouseleave(
  //     function() {
  //       (this).removeClass("hover");
  //     }
  //   );
  return (
    <div className="box_images" id="OurServiceOne">
        <h1 className="inc-font">OUR SERVICES</h1>
        <div className="imgs">
      <figure className="snip1543">
        <img
          src={EmpCar}
          alt="sample108"
        />
        <figcaption>
          <h3>Employee Transportation</h3>
          <p>
           As per your requirment and trip based
          </p>
        </figcaption>
        <a href="#"></a>
      </figure>
      <figure className="snip1543">
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
      </figure>
      <figure className="snip1543 img-heig">
        <img
          src={TourCab}
          alt="sample101"
        />
        <figcaption>
          <h3>All Tour Services</h3>
          <p>
          As per your requirment and trip based
          </p>
        </figcaption>
        <a href="#"></a>
      </figure>
      <figure className="snip1543">
        <img
          src={OutStationCab}
          alt="sample101"
        />
        <figcaption>
          <h3>Outstation Transportation</h3>
          <p>
          As per your requirment and trip based
          </p>
        </figcaption>
        <a href="#"></a>
      </figure>
      </div>
    </div>
  );
}
