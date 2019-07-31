import React from 'react'
import { graphql, Link } from 'gatsby'

import { Img } from '../../utils/styles'

const CollectionPage = ({ data }) => {
  const collection = data.shopifyCollection
  const products = collection.products
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <Link to={`/product/${product.handle}/`}>
            <Img
              fluid={product.images[0].localFile.childImageSharp.fluid}
              alt={product.title}
            />
          </Link>
          <p>{product.title}</p>
          {!product.variants[0].compareAtPrice && (
            <p>{product.variants[0].price}</p>
          )}
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyCollection(handle: { eq: $handle }) {
      id
      description
      handle
      title
      products {
        id
        title
        tags
        handle
        variants {
          price
          compareAtPrice
        }
        images {
          localFile {
            childImageSharp {
              fluid(maxWidth: 910) {
                aspectRatio
                base64
                originalImg
                originalName
                presentationHeight
                presentationWidth
                sizes
                src
                srcSet
                srcSetWebp
                srcWebp
                tracedSVG
              }
            }
          }
        }
      }
    }
  }
`

export default CollectionPage
