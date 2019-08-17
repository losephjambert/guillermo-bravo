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
      height: 100%;
    }
    .slide {
      min-width: auto !important;
      width: 100%;

      margin: 0;
      text-align: center;
      height: 100%;
      width: 100%;
      background-color: rgb(148, 0, 211);
      display: flex;
      flex-flow: column;

      div {
        outline: 1px solid blue;
        width: 100%;
        flex: 1 0 auto;

        img {
          max-height: 100%;
          max-width: 100%;
          margin: auto;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          outline: 1px solid red;
        }
      }
    }
  }
`

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
      'https://www.fillmurray.com/1600/900',
      'https://www.fillmurray.com/900/1600',
      'https://www.fillmurray.com/1600/900',
      'https://www.fillmurray.com/900/1600',
      'https://www.fillmurray.com/1600/900',
      'https://www.fillmurray.com/900/1600',
      'https://www.fillmurray.com/1600/900',
      'https://www.fillmurray.com/900/1600',
      'https://www.fillmurray.com/1600/900',
      'https://www.fillmurray.com/900/1600',
      'https://www.fillmurray.com/1600/900',
      'https://www.fillmurray.com/900/1600',
    ]
    return (
      <StyledCarouselWrapper>
        <Carousel {...RRCSettings}>
          {images.map((image, i) => {
            return (
              <div key={i}>
                <img src={image} />
              </div>
            )
          })}
        </Carousel>
      </StyledCarouselWrapper>
    )
  }
}
