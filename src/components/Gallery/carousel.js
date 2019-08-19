import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styled from 'styled-components'

const StyledCarouselWrapper = styled.div`
  .carousel.carousel-slider .control-arrow {
    position: fixed;
    z-index: 10;
  }
  .carousel {
    .slider-wrapper {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }

    .slider {
      display: flex;
      flex-flow: row nowrap;
    }

    .slide {
      height: 100vh;
      min-width: 100%;
      outline: 1px solid red;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgb(148, 0, 211);

      img {
        position: absolute;
        max-height: 100%;
        max-width: 90%;
      }
    }
  }
`

const MyCarouselWrapper = styled.div``

export default class SimpleSlider extends Component {
  render() {
    const RRCSettings = {
      centerMode: true,
      dynamicHeight: false,
      emulateTouch: false,
      useKeyboardArrows: true,
      showThumbs: false,
      showStatus: false,
      showIndicators: false,
      infiniteLoop: true,
      autoPlay: false,
    }

    let images = [
      'https://www.fillmurray.com/1600/1900',
      'https://www.fillmurray.com/900/1600',
      'https://www.fillmurray.com/1600/1900',
      'https://www.fillmurray.com/900/1600',
      'https://www.fillmurray.com/1600/1900',
      'https://www.fillmurray.com/900/1600',
      'https://www.fillmurray.com/1600/1900',
      'https://www.fillmurray.com/900/1600',
      'https://www.fillmurray.com/1600/1900',
      'https://www.fillmurray.com/900/1600',
      'https://www.fillmurray.com/1600/1900',
      'https://www.fillmurray.com/900/1600',
    ]
    return (
      <StyledCarouselWrapper>
        <Carousel {...RRCSettings}>
          {images.map((image, i) => {
            return <img key={i} src={image} alt="dynamic alt text" visually-hide={true} />
          })}
        </Carousel>
      </StyledCarouselWrapper>
    )
  }
}
