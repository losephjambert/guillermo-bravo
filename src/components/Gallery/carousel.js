import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const CarouselWrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .carousel .slide {
    background: transparent;
  }
  .slide {
    opacity: 0.5;
    transition: 350ms;
    &:hover {
      cursor: pointer;
    }
  }
  .slide.selected {
    opacity: 1;
  }
`
const CarouselBackgroundImage = styled.div`
  /* outline: 5px solid red; */
  height: 100vh;
  background-image: ${props => `url(${props.image})`};
  background-repeat: no-repeat;
  background-size: 75%;
  background-position: center;
  img {
    visibility: collapse;
    height: 0;
    width: 0;
  }
`

let images = [
  'https://via.placeholder.com/1600/1900',
  'https://via.placeholder.com/900/1600',
  'https://via.placeholder.com/1600/1900',
  'https://via.placeholder.com/900/1600',
  'https://via.placeholder.com/1600/1900',
  'https://via.placeholder.com/900/1600',
  'https://via.placeholder.com/1600/1900',
  'https://via.placeholder.com/900/1600',
  'https://via.placeholder.com/1600/1900',
  'https://via.placeholder.com/900/1600',
  'https://via.placeholder.com/1600/1900',
  'https://via.placeholder.com/900/1600',
]

export default function SimpleSlider() {
  return (
    <CarouselWrapper>
      <Carousel
        centerMode={true}
        centerSlidePercentage={50}
        emulateTouch={true}
        infiniteLoop={true}
        showArrows={false}
        showThumbs={false}
        useKeyboardArrows={true}
        showIndicators={false}
      >
        {images.map((image, i) => {
          return (
            <CarouselBackgroundImage key={i} image={image}>
              <img src={image} alt="dynamic alt text" />
            </CarouselBackgroundImage>
          )
        })}
      </Carousel>
    </CarouselWrapper>
  )
}
