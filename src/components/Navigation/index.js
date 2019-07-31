import React, { useContext, useState, useEffect } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import StoreContext from '../../context/StoreContext'

const H1 = props => <Link {...props}>{props.children}</Link>

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
  const ProductMenu = (
    <section>
      <h1>Products</h1>
      <ul>
        {collections.map(collection => (
          <li key={collection.node.id}>
            <Link to={`/collection/${collection.node.handle}`}>
              {collection.node.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )

  return (
    <div>
      <div>
        <div>{ProductMenu}</div>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <div>
          <Link to="/cart">
            {quantity !== 0 && <span>{quantity}</span>}
            Cart
          </Link>
        </div>
      </div>
    </div>
  )
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
