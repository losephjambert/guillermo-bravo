import Image from 'gatsby-image'
import styled, { createGlobalStyle } from 'styled-components'
import tw from 'tailwind.macro'

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  }
  html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
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
