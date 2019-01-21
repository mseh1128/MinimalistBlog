import styled from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'

const HeaderContainer = styled.header`
      background: #FFFFFF;
      margin-bottom: 1.45rem;
      border-bottom: 1px solid #eee;
      box-shadow: 0px 0px 10px -5px rgba(0,0,0,0.4);
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1;
`
const TitleContainer = styled.div`
      margin: 0 5rem;
      max-width: 960;
      padding: 1.45rem 1.0875rem;
      @media (max-width: 768px) {
        padding-left: 0;
        margin-left: 2rem;
        font-size: 3px;
      }
`

const Title = styled.h1`
      margin: 0;
      color: ${ props => props.theme.primary } }
      @media (max-width: 768px) {
        font-size: 1.75rem;
      }
      @media (max-width: 375px) {
        font-size: 1.5rem;
      }
      &:hover {
        cursor: pointer;
      }
`

const Header = ({ siteTitle }) => (
  <HeaderContainer onClick={() => document.body.scrollTo(0, 0)} >
    <TitleContainer>
      <Title>
        {siteTitle}
      </Title>
    </TitleContainer>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header
