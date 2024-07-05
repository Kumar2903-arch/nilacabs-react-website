import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 
import Car from '../images/car.jpg';
import Bus from '../images/bus1.avif'; // Done
import './imageslide.css';

export default function Slide() { 
return ( 
	<div id='home'> 
	<Carousel> 
		<Carousel.Item interval={2000}>
		<img className="w-100 opacity-75" src={Bus} alt='one'/>
		<Carousel.Caption className='d-flex flex-column top-50'> 
			<h3 className='fs-1 fw-bold fs-xs-1'><span className='h-50 fst-italic'>W</span>elcome to Corporate Cab Services</h3> 
            <span className='fs-3'>Where Business Meets Comfort and Reliability,</span> 
			<span className='fs-3'>Ensuring a Secure Commute for every passenger</span> 
		</Carousel.Caption> 
		</Carousel.Item> 
		<Carousel.Item interval={2000}> 
		<img className="w-100 img_height" src={Car} alt='two'/>
		<Carousel.Caption className='d-flex flex-column top-50'> 
			<h3>Navigate your way to success with <span>Nila Cabs</span>, One Ride at a Time</h3> 
			<p>Sample Text for Image Two</p> 
		</Carousel.Caption> 
		</Carousel.Item> 
        <Carousel.Item interval={2000}> 
		<img className="w-100 h75" src={Bus} alt='one'/>
		<Carousel.Caption> 
			{/* <h3>Label for first slide</h3> 
			<p>Sample Text for Image One</p>  */}
		</Carousel.Caption> 
		</Carousel.Item> 
        <Carousel.Item interval={2000}> 
		<img className="w-100 h75" src={Car} alt='one'/>
		<Carousel.Caption> 
			{/* <h3>Label for first slide</h3> 
			<p>Sample Text for Image One</p>  */}
		</Carousel.Caption> 
		</Carousel.Item>
        <Carousel.Item interval={2000}> 
		<img className="w-100 h75" src={Bus} alt='one'/>
		<Carousel.Caption> 
			{/* <h3>Label for first slide</h3> 
			<p>Sample Text for Image One</p>  */}
		</Carousel.Caption> 
		</Carousel.Item>  
	</Carousel> 
	</div> 
); 
}
