import React from 'react'
import '../styles/homePage.css'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

import finess1 from '../assets/img/finess1.jpg';
import finess2 from '../assets/img/finess2.jpg';
import finess3 from '../assets/img/finess3.webp'

export const HomePage = () => {
  return (
    
    <div className="container-fluid bg-custom py-4">
    <Carousel >
      <Carousel.Item>
        <img src={finess3} alt="Instructor Finess IA" className="d-block mx-auto vertical-img" />


        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={finess2} alt="Instructor Finess IA" className="d-block mx-auto vertical-img" />


        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src={finess1} alt="Instructor Finess IA" className="d-block mx-auto vertical-img" />


        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
