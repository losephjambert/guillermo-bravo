// To Do:
// Set up Blog, Studio, and Customer Care content in Contentful
// nav is currently a mix of hard-coded links and dynamic links.
// the contentful data will make it fully dynamic

import React, { useContext, useState, useEffect } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import StoreContext from '../../context/StoreContext'
import { StyledHeader, Nav, Menu, MenuItem, MenuToggle, SiteMenu, ProductMenu, ProductMenuItem } from '../../utils/styles'

const countQuantity = lineItems => {
  let quantity = 0

  lineItems.forEach(item => {
    quantity = quantity + item.quantity
  })

  return quantity
}

const Header = ({ siteTitle, path }) => {
  // cart quantity
  const context = useContext(StoreContext)
  const { checkout } = context
  const [quantity, setQuantity] = useState(countQuantity(checkout ? checkout.lineItems : []))

  useEffect(() => {
    setQuantity(countQuantity(checkout ? checkout.lineItems : []))
  }, [checkout])

  // boolean to handle open and closed states for ProductMenu
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false)
  const toggleProductMenu = () => setIsProductMenuOpen(!isProductMenuOpen)

  // boolean to handle open and closed states for SiteMenu
  const [isSiteMenuOpen, setIsSiteMenuOpen] = useState(false)
  const toggleSiteMenu = () => setIsSiteMenuOpen(!isSiteMenuOpen)

  // get collection headers for shopping menu
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

  const collections = data.allShopifyCollection.edges.filter(
    x => x.node.id !== 'Shopify__Collection__Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzMyMTkxMDIxMTE3'
  )
  const Products = (
    <>
      <MenuToggle onClick={toggleProductMenu}>Products</MenuToggle>
      <ProductMenu pose={isProductMenuOpen ? 'open' : 'closed'} withParent={false}>
        {collections.map(collection => (
          <ProductMenuItem
            key={collection.node.id}
            active={path.replace(/[/]/g, '').toUpperCase() === collection.node.handle.toUpperCase()}
          >
            <Link to={`/${collection.node.handle}`} style={{ textTransform: 'capitalize' }}>
              {collection.node.title.toLowerCase()}
            </Link>
          </ProductMenuItem>
        ))}
      </ProductMenu>
    </>
  )

  console.log(path, siteTitle)

  return (
    <StyledHeader>
      <Nav path={path}>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <div>
          <Link to="/cart">Cart {quantity !== 0 && <span>{quantity}</span>}</Link>
        </div>
        <Menu>
          <MenuItem>
            <MenuToggle
              onClick={() => {
                toggleSiteMenu()
                setIsProductMenuOpen(false)
              }}
            >
              {isSiteMenuOpen ? '🔺' : '🔻'}
            </MenuToggle>
            <SiteMenu pose={isSiteMenuOpen ? 'open' : 'closed'}>
              <MenuItem>
                <Link to="/">Home</Link>
              </MenuItem>
              <MenuItem>{Products}</MenuItem>
              <MenuItem>
                <Link to="/studio">Studio</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/blog">Blog</Link>
              </MenuItem>
            </SiteMenu>
          </MenuItem>
        </Menu>
      </Nav>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  path: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
  path: ``
}

export default Header
