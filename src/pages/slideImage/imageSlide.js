import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import OffLogoOne from "../images/OFFICE LOGO-Recreate_withoutbackground.png";
import OffLogoTwo from "../images/OFFICE LOGO-Recreate_withoutbackground.png";
import OffLogoThree from "../images/OFFICE LOGO-Recreate_withoutbackground.png"; // Done
import "./imageslide.css";

export default function Slide() {
  return (
    <div id="home">
      <Carousel className="page_down">
        <Carousel.Item>
          <div className="background-container_1">
            <img src={OffLogoOne} alt="Logo" className="img_fix_1" />
            <img src={OffLogoTwo} alt="Logo" className="img_fix_2" />
            <img src={OffLogoThree} alt="Logo" className="img_fix_3" />
            <div className="content_1">
              <h1
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                Smart Commute Cab Services
              </h1>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
