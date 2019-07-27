import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import { Img } from '../../utils/styles' //need to update the Img component in utils/styles to not use emotion...

const ProductGrid = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(sort: { fields: [createdAt], order: DESC }) {
          edges {
            node {
              id
              title
              handle
              createdAt
              images {
                id
                originalSrc
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 910) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
              variants {
                price
              }
            }
          }
        }
      }
    `
  )

  return (
    <div>
      {data.allShopifyProduct.edges.map(x => (
        <div key={x.node.id}>
          <Link to={`/product/${x.node.handle}/`}>
            <Img
              fluid={x.node.images[0].localFile.childImageSharp.fluid}
              alt={x.node.handle}
            />
          </Link>
          <p>{x.node.title}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductGrid
