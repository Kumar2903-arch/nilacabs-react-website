import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import './animatedCounter.css';


export default function AnimatedCounter() {
	const [counterOn, setCounterOn] = useState(false);

	return(
		<ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
		<section className="counters">

		<div className='counter_container'>			
		<div>
			<h1 className="counter">
				{counterOn && <CountUp start={0} end={15} duration={2} delay={0}/>}
			</h1>
			<h3>Year Of Experience</h3>
		</div>
		<div>
			<h1 className="counter">
				{counterOn && <CountUp start={0} end={5000} duration={2} delay={0}/>}
				+
			</h1>
			<h3>Users</h3>
		</div>
		<div>
			<h1 className="counter">
				{counterOn && <CountUp start={0} end={150} duration={2} delay={0}/>}
				+
			</h1>
			<h3>Fleet</h3>
		</div>
		<div>
			<h1 className="counter">
				{counterOn && <CountUp start={0} end={500} duration={2} delay={0}/>}
				+
			</h1>
			<h3>Trips Per Day</h3>
		</div>
		</div>
		</section>
		</ScrollTrigger>
	);
}
