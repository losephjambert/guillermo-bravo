import React, { useState, useEffect } from 'react'
import { Img } from '../../utils/styles'
import styled from 'styled-components'

const StyledSliderTrack = styled.section`
  display: flex;
  overflow: hidden;
  width: 100%;
  position: relative;
  height: 100vh;
`

const StyledInnerSliderTrack = styled.section`
  position: absolute;
  height: 100%;
  display: flex;
  width: ${props => props.width}%;
  transform: translate3d(${props => props.trackPosition}%, 0, 0);
  justify-content: flex-start;
  transition: 300ms;
`

const StyledSliderItem = styled.div`
  transition: 450ms;
  min-width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  // opacity: 0.6;
  transform: scale(0.6);
  &.active {
    // opacity: 1;
    // transform: scale(0.8);
  }
  div {
    flex-basis: 100%;
  }
  &:hover {
    cursor: pointer;
  }
`

const Fixed = styled.span`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`

const Slider = ({ items }) => {
  const [sliderWindow, setSliderWindow] = useState([items[0], items[1], items[2]])

  const [currentIndex, setCurrentIndex] = useState(1)
  const [sliderWidth, setSliderWidth] = useState(items.length * 100)
  const [trackPosition, setTrackPosition] = useState(-25)
  const [sliderItems, setSliderItems] = useState(items)
  const [direction, setDirection] = useState()

  useEffect(() => {
    console.log(currentIndex)
  }, [currentIndex])

  const slideTrack = (e, index) => {
    setCurrentIndex(index)
    if (index > currentIndex) {
      setTrackPosition(trackPosition - 50)
    } else if (index < currentIndex) {
      setTrackPosition(trackPosition + 50)
    }
  }

  return (
    <>
      <StyledSliderTrack width={sliderWidth}>
        <StyledInnerSliderTrack width={sliderWidth} trackPosition={trackPosition}>
          {sliderItems.map((item, i) => (
            <StyledSliderItem
              key={i}
              className={`slider-item ${currentIndex === i ? 'active' : ''}`}
              onClick={e => slideTrack(e, i)}
            >
              <Img fluid={item.fluid} alt="dynamic alt text" />
            </StyledSliderItem>
          ))}
        </StyledInnerSliderTrack>
      </StyledSliderTrack>
    </>
  )
}

export default Slider
