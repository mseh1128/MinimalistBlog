/* eslint-disable no-tabs */
import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import styled, { css } from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import BlogCard from '../components/BlogCard'
import RadioGroupContainer from '../components/RadioGroupContainer'
import Image from '../components/image'
import SEO from '../components/seo'

// const cards = [<BlogCard text={tempText} />, <BlogCard text={tempText} />]

const CardGroup = styled(Card.Group)`
  &&& {
    margin-top: 6.75rem;
    font-size: 1rem;
      @media (max-width: 768px) {
          margin-top: 5rem;  
        }
        @media (max-width: 375px) {
          margin-top: 4.5rem;
        }
  }  

`

class IndexPage extends Component {
  constructor (props) {
    super(props)
    this.state = { showRadioGroup: true, width: 0, height: 0 }
  }

  componentDidMount () {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  closeRadioGroup = () => {
    this.setState({ showRadioGroup: false })
  }

  render () {
    let radioGroup
    if (this.state.showRadioGroup && this.state.width >= 1024) {
      radioGroup = <RadioGroupContainer closeRadioComponent={this.closeRadioGroup} />
    }

    return (
      <Layout>
        <CardGroup style={{ marginBottom: `1rem` }}>
          {this.props.data.allMarkdownRemark.edges.map(post => {
            const { html, id, frontmatter: { title, author, date, tags } } = post.node
            return <BlogCard tags={tags} key={id} text={html} title={title} author={author} date={date} />
          })}
        </CardGroup>
        {radioGroup}
      </Layout>
    )
  }
}
export const pageQuery = graphql`
  query BlogQuery{
      allMarkdownRemark {
    edges {
      node {
    id
    html
	      frontmatter {
      path
          title
    date
    author
    tags
  }
  excerpt
}
}
}
}
`

export default IndexPage
