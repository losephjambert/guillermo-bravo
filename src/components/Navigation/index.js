// To Do:
// Set up Blog, Studio, and Customer Care content in Contentful
// nav is currently a mix of hard-coded links and dynamic links.
// the contentful data will make it fully dynamic

import React, { useContext, useState, useEffect } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import StoreContext from '../../context/StoreContext'

const countQuantity = lineItems => {
  let quantity = 0

  lineItems.forEach(item => {
    quantity = quantity + item.quantity
  })

  return quantity
}

const Navigation = ({ siteTitle }) => {
  // nav cart display quantity
  const context = useContext(StoreContext)
  const { checkout } = context
  const [quantity, setQuantity] = useState(
    countQuantity(checkout ? checkout.lineItems : [])
  )

  useEffect(() => {
    setQuantity(countQuantity(checkout ? checkout.lineItems : []))
  }, [checkout])

  const data = useStaticQuery(
    graphql`
      query {
        allShopifyCollection {
          edges {
            node {
              id
              title
              handle
            }
          }
        }
      }
    `
  )

  const collections = data.allShopifyCollection.edges
  const Products = (
    <li>
      Products
      <ul>
        {collections.map(collection => (
          <li key={collection.node.id}>
            <Link to={`/collection/${collection.node.handle}`}>
              {collection.node.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  )

  return (
    <nav>
      <div>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {Products}
          <li>
            <Link to="/studio">Studio</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <div>
          <Link to="/cart">
            Cart {quantity !== 0 && <span>{quantity}</span>}
          </Link>
        </div>
      </div>
    </nav>
  )
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
