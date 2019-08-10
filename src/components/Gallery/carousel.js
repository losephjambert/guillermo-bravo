import React, { Component } from 'react'

import Slider from 'react-slick'

// import Carousel from 'nuka-carousel'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

export default class SimpleSlider extends Component {
  render() {
    // const nukaSettings = {
    //   // autoplay: false,
    //   // cellAlign: 'center',
    //   // cellSpacing: 200,
    //   // enableKeyboardControls: true,
    //   // dragging: true,
    //   // // heightMode: 'max',
    //   slidesToShow: 1,
    //   // swiping: true,
    //   // // width: '100vw',
    //   wrapAround: true,
    //   // initialSlideHeight: '500px'
    // }
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

    let boxes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const backgroundSettings = {
      backgroundRepeat: `no-repeat`,
      backgroundSize: `100%`,
      backgroundPosition: `center`,
    }
    const bgi1 = {
      ...backgroundSettings,
      backgroundImage: `url(https://www.fillmurray.com/750/325)`,
    }
    const bgi2 = {
      ...backgroundSettings,
      backgroundImage: `url(https://www.fillmurray.com/325/750)`,
    }
    const flex = {
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`,
      fontSize: `3em`,
    }
    const margin = {
      margin: `0`,
    }
    const evenStyles = {
      ...flex,
      width: `600px`,
      height: `600px`,
      // backgroundColor: `tomato`,
    }
    const oddStyles = {
      ...flex,
      height: `600px`,
      width: `600px`,
      // backgroundColor: `rebeccapurple`,
    }
    const fixed = {
      position: `fixed`,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 0,
    }

    const AliceSettings = {
      mouseDragEnabled: true,
      responsive: {
        0: { items: 3 },
      },
      // stagePadding: {
      //   paddingLeft: 100,
      //   paddingRight: 100,
      // },
    }
    // return (
    //   <div>
    //     <Carousel {...RRCSettings}>
    //       {boxes.map(box => {
    //         if (box % 2 === 0)
    //           return (
    //             <div key={box} style={flex}>
    //               <div style={evenStyles}>{box}</div>
    //               {/* <img src="https://www.fillmurray.com/750/325" alt="" /> */}
    //             </div>
    //           )
    //         else
    //           return (
    //             <div key={box} style={flex}>
    //               <div style={oddStyles}>{box}</div>
    //               {/* <img src="https://www.fillmurray.com/325/750" alt="" /> */}
    //             </div>
    //           )
    //       })}
    //     </Carousel>
    //   </div>
    // )

    return (
      <AliceCarousel {...AliceSettings} style={fixed}>
        {boxes.map(box => {
          if (box % 2 === 0)
            return (
              <div key={box} style={{ ...flex, ...margin }}>
                <div style={{ ...evenStyles, ...bgi1 }} />
                {/* <img src="https://www.fillmurray.com/750/325" alt="" /> */}
              </div>
            )
          else
            return (
              <div key={box} style={{ ...flex, ...margin }}>
                <div style={{ ...oddStyles, ...bgi2 }} />
                {/* <img src="https://www.fillmurray.com/325/750" alt="" /> */}
              </div>
            )
        })}
      </AliceCarousel>
    )
  }
}
