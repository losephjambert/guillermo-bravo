// To Do:
// Set up Blog, Studio, and Customer Care content in Contentful
// nav is currently a mix of hard-coded links and dynamic links.
// the contentful data will make it fully dynamic

import React, { useContext, useState, useEffect } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import StoreContext from '../../context/StoreContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons'
import {
  StyledHeader,
  Nav,
  NavItem,
  Menu,
  MenuItem,
  MenuToggle,
  SiteMenu,
  ProductMenu,
  ProductMenuItem,
  Title
} from '../../utils/styles'
import logo from '../../images/g-b-icon.png'

const countQuantity = lineItems => {
  let quantity = 0

  lineItems.forEach(item => {
    quantity = quantity + item.quantity
  })

  return quantity
}

const Header = ({ siteTitle, path }) => {
  // Nav Icons
  const cartIcon = <FontAwesomeIcon style={{ fontSize: '1.9em' }} icon={faShoppingCart} />
  const hamburger = <FontAwesomeIcon icon={faBars} />
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
      <MenuToggle onClick={toggleProductMenu} active={isProductMenuOpen}>
        Products
      </MenuToggle>
      <ProductMenu pose={isProductMenuOpen ? 'open' : 'closed'} withParent={false}>
        {collections.map(collection => (
          <ProductMenuItem
            key={collection.node.id}
            active={path.toUpperCase() === `/products/${collection.node.handle}/`.toUpperCase()}
            paths={[path.replace(/[/]/g, '').toUpperCase(), `/products/${collection.node.handle}/`.toUpperCase()]}
          >
            <Link to={`/products/${collection.node.handle}`} style={{ textTransform: 'capitalize' }}>
              {collection.node.title.toLowerCase()}
            </Link>
          </ProductMenuItem>
        ))}
      </ProductMenu>
    </>
  )

  return (
    <StyledHeader>
      <Nav>
        <NavItem>
          <Menu>
            <MenuItem>
              <MenuToggle
                onClick={() => {
                  toggleSiteMenu()
                  setIsProductMenuOpen(false)
                }}
                active={isSiteMenuOpen === true}
              >
                {hamburger}
              </MenuToggle>
              <SiteMenu pose={isSiteMenuOpen ? 'open' : 'closed'}>
                <MenuItem active={path === '/'}>
                  <Link to="/" onClick={() => setIsProductMenuOpen(false)}>
                    Home
                  </Link>
                </MenuItem>
                <MenuItem>{Products}</MenuItem>
                <MenuItem active={path === '/studio/'}>
                  <Link to="/studio" onClick={() => setIsProductMenuOpen(false)}>
                    Studio
                  </Link>
                </MenuItem>
                <MenuItem active={path === '/blog/'}>
                  <Link to="/blog" onClick={() => setIsProductMenuOpen(false)}>
                    Blog
                  </Link>
                </MenuItem>
              </SiteMenu>
            </MenuItem>
          </Menu>
        </NavItem>
        <NavItem>
          <Link to="/">
            <Title bgImage={logo}>{siteTitle}</Title>
          </Link>
        </NavItem>
        <NavItem>
          <div>
            <Link to="/cart">
              {cartIcon} {quantity !== 0 && <span>{quantity}</span>}
            </Link>
          </div>
        </NavItem>
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
