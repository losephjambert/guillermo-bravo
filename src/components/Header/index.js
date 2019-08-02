// To Do:
// Set up Blog, Studio, and Customer Care content in Contentful
// nav is currently a mix of hard-coded links and dynamic links.
// the contentful data will make it fully dynamic

import React, { useContext, useState, useEffect } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import StoreContext from '../../context/StoreContext'
import { HoverMenu, HoverMenuTrigger, HoverMenuItem, NavItem, Menu, Nav, StyledHeader } from '../../utils/styles'

const countQuantity = lineItems => {
  let quantity = 0

  lineItems.forEach(item => {
    quantity = quantity + item.quantity
  })

  return quantity
}

const Header = ({ siteTitle }) => {
  // nav cart display quantity
  const context = useContext(StoreContext)
  const { checkout } = context
  const [quantity, setQuantity] = useState(countQuantity(checkout ? checkout.lineItems : []))

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

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  const collections = data.allShopifyCollection.edges.filter(
    x => x.node.id !== 'Shopify__Collection__Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzMyMTkxMDIxMTE3'
  )
  const Products = (
    <NavItem>
      <HoverMenuTrigger onClick={toggle}>Products</HoverMenuTrigger>
      <HoverMenu pose={isOpen ? 'open' : 'closed'}>
        {collections.map((collection, i) => (
          <HoverMenuItem key={collection.node.id} tansitionDampener={i}>
            <Link to={`/collection/${collection.node.handle}`}>{collection.node.title}</Link>
          </HoverMenuItem>
        ))}
      </HoverMenu>
    </NavItem>
  )

  const ShoppingMenu = (
    <Menu>
      <NavItem>
        <Link to="/">Home</Link>
      </NavItem>
      {Products}
      <NavItem>
        <Link to="/studio">Studio</Link>
      </NavItem>
      <NavItem>
        <Link to="/blog">Blog</Link>
      </NavItem>
    </Menu>
  )

  return (
    <StyledHeader>
      <Nav>
        <div>
          <h1>
            <Link to="/">{siteTitle}</Link>
          </h1>
          {ShoppingMenu}
          <div>
            <Link to="/cart">Cart {quantity !== 0 && <span>{quantity}</span>}</Link>
          </div>
        </div>
      </Nav>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
