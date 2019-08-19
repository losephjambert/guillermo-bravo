import React, { useContext } from 'react'
import styled from 'styled-components'

const StyledSliderWrapper = styled.section`
  ul {
    overflow: visible;
    width: 100%;
    li {
      display: inline-block;
      img {
      }
    }
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

const SimpleSlider = () => {
  return (
    <StyledSliderWrapper>
      <ul>
        {images.map((image, i) => {
          return (
            <li key={i}>
              <img src={image} alt="dynamic alt text" visually-hide={true} />
            </li>
          )
        })}
      </ul>
    </StyledSliderWrapper>
  )
}

export default SimpleSlider
