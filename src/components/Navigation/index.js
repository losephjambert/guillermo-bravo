import React, { useContext, useState, useEffect } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import StoreContext from '../../context/StoreContext'

const H1 = props => (
  <h1>
    <Link {...props}>{props.children}</Link>
  </h1>
)

const Container = props => <div {...props} />

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
      <Container>
        <div>{ProductMenu}</div>
        <div>
          <H1 to="/">{siteTitle}</H1>
        </div>
        <div>
          <H1 to="/cart">
            {quantity !== 0 && <span>{quantity}</span>}
            Cart
          </H1>
        </div>
      </Container>
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
