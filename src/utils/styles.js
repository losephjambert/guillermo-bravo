import Image from 'gatsby-image'
import styled, { createGlobalStyle } from 'styled-components'
// import tw from 'tailwind.macro'
import styledNormalize from 'styled-normalize'
import posed from 'react-pose'

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  *{
    box-sizing: border-box;
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
      x: { type: 'spring', stiffness: 1000, damping: 75 }
    }
  },
  closed: {
    delay: 100,
    height: '0px',
    x: '-100%',
    opacity: 0
  }
})
const PosedFadeInItem = posed.li({
  open: { opacity: 1 },
  closed: { opacity: 0 }
})
const PosedFadeInPanel = posed.ul({
  open: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { ease: 'linear', duration: 0, delay: 0 },
      opacity: { ease: 'easeIn', duration: 300, delay: 0 }
    }
  },
  closed: {
    height: '0px',
    opacity: 0,
    transition: {
      opacity: { ease: 'easeOut', duration: 300, delay: 0 },
      height: { ease: 'linear', duration: 0, delay: 300 }
    }
  }
})
export const StyledHeader = styled.header`
  margin-bottom: 200px;
`
export const Nav = styled.nav`
  position: fixed;
  top: 50px;
  left: 0;
  z-index: 100;
  padding: 0 50px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-column-gap: 1fr;
  justify-content: space-between;
  justify-items: end;
`
export const NavItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`
export const Menu = styled.ul`
  font-size: 2em;
  display: inline-flex;
  width: 100%;
`
export const MenuItem = styled.li`
  font-weight: bold;
  color: ${props => (props.active ? 'black' : 'grey')};
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
  'aria-haspopup': true
})`
  &:focus {
    outline: none;
    border: none;
  }
  &:hover {
    color: black;
  }
  color: ${props => (props.active ? 'black' : 'grey')};
  padding: 0;
  display: inline-flex;
  font-weight: inherit;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
`
export const SiteMenu = styled(PosedFadeInPanel)`
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
  color: ${props => (props.active ? 'black' : 'grey')};
  margin-left: 25px;
  font-size: 0.8em;
  display: inline-flex;
  &:hover {
    color: black;
  }
`
