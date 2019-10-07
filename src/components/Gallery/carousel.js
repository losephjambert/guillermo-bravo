import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Img } from '../../utils/styles'

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
  height: 100vh;
  display: flex;
  align-items: center;
  div {
    flex-basis: 100%;
  }
  img {
    padding: 100px 30px;
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

export default function SimpleSlider(props) {
  return (
    <CarouselWrapper>
      <Carousel
        centerMode={true}
        centerSlidePercentage={50}
        emulateTouch={false}
        infiniteLoop={true}
        showArrows={false}
        showThumbs={false}
        useKeyboardArrows={true}
        showIndicators={false}
      >
        {props.images.map((image, i) => {
          return (
            <CarouselBackgroundImage key={i}>
              <Img fluid={image.fluid} alt="dynamic alt text" />
            </CarouselBackgroundImage>
          )
        })}
      </Carousel>
    </CarouselWrapper>
  )
}
