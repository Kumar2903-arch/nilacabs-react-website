import React from "react";
import './photogallery.css';
import Img_1 from '../Company photos/IMG_1.JPG';
import Img_2 from '../Company photos/IMG_2.JPG';
import Img_3 from '../Company photos/IMG_3.JPG';
import Img_4 from '../Company photos/IMG_4.JPG';
import Img_5 from '../Company photos/IMG_5.JPG';
import Img_6 from '../Company photos/IMG_6.JPG';
import Img_7 from '../Company photos/IMG_7.JPG';
import Img_8 from '../Company photos/IMG_8.JPG';
import Img_9 from '../Company photos/IMG_9.JPG';
import Img_10 from '../Company photos/IMG_10.JPG';


export default function PhotoGallery(){
    return(
        <div class="wrapper">
             <h1>Our Photos</h1>
	<div class="photobanner">

  <img class="first" src={Img_1} alt="" />
  <img src={Img_2} alt="" />
  <img src={Img_3} alt="" />
  <img src={Img_4}alt="" />
  <img src={Img_5} alt="" />
  <img src={Img_6} alt="" />
  <img src={Img_7} alt="" />
  <img src={Img_8} alt="" />
  <img src={Img_9}alt="" />
  <img src={Img_10} alt="" />
</div>
</div>
    );
}