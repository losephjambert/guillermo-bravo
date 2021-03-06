import Image from 'gatsby-image'
import styled, { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'
import posed from 'react-pose'

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  *{
    box-sizing: border-box;
    max-width: 100%;
  }
  body {
    margin: 0;
  }
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  h1, h2, h3, h4, h5, h6{
    margin: 0;
    padding: 0;
  }
  ul, ol, dl, li{
    list-style: none;
    margin: 0;
    padding: 0;
  }
`

export const Title = styled.h1`
  background: ${props => (props.bgImage ? `url(${props.bgImage})` : null)};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  text-indent: -9999px;
  width: 200px;
  height: 50px;
`

export const Img = styled(Image)`
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
`
export const GridContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(5, 300px);
  overflow: scroll;
`

export const GridItem = styled.div``

const PosedPanel = posed.ul({
  open: {
    delayChildren: 200,
    staggerChildren: 200,
    height: 'auto',
    opacity: 1,
    x: '0',
    transition: {
      x: { type: 'spring', stiffness: 1000, damping: 75 },
    },
  },
  closed: {
    height: '0px',
    x: '-100%',
    opacity: 0,
    transition: {
      opacity: { ease: 'easeInOut', duration: 300, delay: 0 },
      height: { ease: 'easeInOut', duration: 200, delay: 300 },
      x: { ease: 'linear', duration: 0, delay: 500 },
    },
  },
})
const PosedFadeInItem = posed.li({
  open: { opacity: 1 },
  closed: { opacity: 0 },
})
export const StyledHeader = styled.header``

export const Nav = styled.nav`
  position: fixed;
  top: 20px;
  left: 0;
  z-index: 100;
  padding: 0 20px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`
export const NavItem = styled.div``

export const Menu = styled.ul`
  font-size: 2em;
  display: inline-flex;
  width: 100%;
`
export const MenuItem = styled(PosedFadeInItem)`
  font-weight: bold;
  color: ${props => (props.active ? 'black' : 'black')};
  &:hover {
    color: black;
  }
  a {
    color: inherit;
    text-decoration: none;
    padding: 5px 0;
  }
`
export const MenuToggle = styled.button.attrs({
  type: 'button',
  'aria-label': 'more',
  'aria-controls': 'short-menu',
  'aria-haspopup': true,
})`
  &:focus {
    outline: none;
    border: none;
  }
  &:hover {
    color: black;
    cursor: pointer;
  }
  color: ${props => (props.active ? 'black' : 'black')};
  padding: 0;
  display: inline-flex;
  font-weight: inherit;
  border: none;
  outline: none;
  background-color: transparent;
`
export const SiteMenu = styled(PosedPanel)`
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  top: 50px;
`
export const ProductMenu = styled(PosedPanel)`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
`
export const ProductMenuItem = styled(PosedFadeInItem)`
  color: ${props => (props.active ? 'black' : 'black')};
  margin-left: 25px;
  font-size: 0.8em;
  display: inline-flex;
  &:hover {
    color: black;
  }
`
