import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GridContainer, GridItem } from '../utils/styles'
import SEO from '../components/seo'
import { Img } from '../utils/styles'

// Test SimpleSlider
import Slider from '../components/Gallery/customSlider'

const IndexPage = () => {
  const galleryData = useStaticQuery(
    graphql`
      query {
        allContentfulImageGallery {
          edges {
            node {
              galleryTitle
              galleryImages {
                id
                title
                fluid(maxWidth: 910, toFormat: JPG) {
                  tracedSVG
                  srcSetWebp
                  sizes
                  srcSet
                  srcWebp
                  src
                  base64
                  aspectRatio
                }
              }
            }
          }
        }
      }
    `
  )
  const { galleryImages } = galleryData.allContentfulImageGallery.edges[0].node

  return (
    <>
      <SEO title="Home" keywords={[`sneakers`, `fashion`, `sustainable`, `Seattle`]} />
      <Slider items={galleryImages} />
    </>
  )
}

export default IndexPage
