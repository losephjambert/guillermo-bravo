import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import SEO from '../components/seo'
import ProductGrid from '../components/ProductGrid'

import { Img } from '../utils/styles' //need to update utils/styles to not use emotion...

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
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <p>Welcome to your new Shop powered by Gatsby and Shopify.</p>
      <Link to="/page-2">Page 2</Link>
      {galleryImages.map(image => (
        <div key={image.id}>
          <Img fluid={image.fluid} alt={image.title} />
        </div>
      ))}
      <ProductGrid />
    </>
  )
}

export default IndexPage
