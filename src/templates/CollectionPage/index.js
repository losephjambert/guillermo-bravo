import React from 'react'
import { graphql, Link } from 'gatsby'
import { Flex, Box } from '@rebass/grid/emotion'

import { Img } from '../../utils/styles'

const CollectionPage = ({ data }) => {
  const collection = data.shopifyCollection
  const products = collection.products
  return (
    <Flex flexWrap="wrap" mx={-2}>
      {products.map(product => (
        <Box width={[1, 1 / 2, 1 / 3]} px={2} key={product.id}>
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
        </Box>
      ))}
    </Flex>
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
