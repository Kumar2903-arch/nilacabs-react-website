import React from "react";
import './photogallery.css';
import Img_1 from '../Company photos/IMG_1.JPG';
import Img_2 from '../Company photos/IMG_2.JPG';
import Img_3 from '../Company photos/IMG_3.JPG';
import Img_4 from '../Company photos/IMG_4.JPG';
import Img_5 from '../Company photos/IMG_5.JPG';
import { Link } from "react-router-dom";


export default function PhotoGallery(){
    return(
        <div class="wrapper">
             <h1>Our Photos</h1>
	<div class="photobanner">

  <img class="first" src={Img_1} alt="" />
  <img src={Img_2} alt="" />
  <img src={Img_3}alt="" />
  <img src={Img_4} alt="" />
  <img src={Img_5} alt="" />
</div>

<div className="pagination-container">
    <div className="pagination-buttons">
    <Link to='/homePage'>
    <button class="custom-btn btn-12"><span>Click!</span><span>Home Page</span></button>
      </Link>
    </div>
  </div>
</div>
    );
}
