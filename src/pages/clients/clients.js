import React from "react";
import { Container } from "react-bootstrap";
import VeeHealth from '../images/vee_healthtek.png';
import Kissflow from '../images/Kissflow.png';
import Zillion from '../images/Zillion.png';
import Tata from '../images/TATA_Consultancy_Service.png';
import './clients.css';

export default function Clients(){
    return(
        <Container className="client_page" id="client">
            <h1 className="heading">OUR CLIENTS</h1>
            <div className="imgs">
                <img className='img_size' src={VeeHealth} alt="Vee"/>
                <img className='img_size' src={Kissflow} alt="Kissflow"/>
                <img className='img_size' src={Zillion} alt="Zillion"/>
                <img className='img_size' src={Tata} alt="Tata"/>
            </div>
        </Container>

    );
}