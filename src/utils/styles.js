import Image from 'gatsby-image'
import styled, { createGlobalStyle } from 'styled-components'
import tw from 'tailwind.macro'
import styledNormalize from 'styled-normalize'
import posed from 'react-pose'

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
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

// Nav Menu
const PosedPanel = posed.ul({
  open: {
    delayChildren: 200,
    staggerChildren: 200,
    height: 'auto',
    x: '0',
    transition: {
      x: { type: 'spring', stiffness: 1000, damping: 75 }
    }
  },
  closed: {
    delay: 300,
    height: '0px',
    x: '-100%'
  }
})

const PosedItem = posed.li({
  open: { opacity: 1 },
  closed: { opacity: 0 }
})
export const StyledHeader = styled.header`
  margin-bottom: 200px;
`
export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 0 0 0 50px;
  min-height: 200px;
  width: 100%;
`
export const Menu = styled.ul`
  width: 300px;
  font-size: 2em;
`
export const HoverMenu = styled(PosedPanel)`
  display: flex;
  flex-flow: column nowrap;
`
export const HoverMenuItem = styled(PosedItem)`
  display: inline-flex;
  margin: 5px 0 5px 30px;
  a {
    padding: 10px 5px;
    color: inherit;
    text-decoration: none;
  }
`
export const NavItem = styled.li`
  font-weight: bold;
  a {
    color: inherit;
    text-decoration: none;
    padding: 5px 0;
  }
`
export const HoverMenuTrigger = styled.button.attrs({
  type: 'button',
  'aria-label': 'more',
  'aria-controls': 'short-menu',
  'aria-haspopup': true
})`
  &:focus {
    outline: none;
    border: none;
  }
  padding: 0;
  display: inline-flex;
  font-weight: inherit;
  cursor: pointer;
  color: inherit;
  border: none;
  outline: none;
  background-color: transparent;
`
