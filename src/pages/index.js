/* eslint-disable no-tabs */
import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import SEO from '../components/seo'

import Layout from '../components/layout'
import BlogCard from '../components/BlogCard'
import RadioGroupContainer from '../components/radioTheme/RadioGroupContainer'

// const cards = [<BlogCard text={tempText} />, <BlogCard text={tempText} />]

const CardGroup = styled(Card.Group)`
  &&& {
    margin-top: 6.75rem;
    margin-bottom: 1rem;
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
        <SEO title="The homepage of a minimalist practice blog made for practice." />
        <CardGroup>
          {this.props.data.allMarkdownRemark.edges.map(post => {
            const { html, id, frontmatter: { title, author, date, tags, coverImage } } = post.node
            return <BlogCard tags={tags} key={id} text={html} title={title} author={author} date={date} coverImage={coverImage} />
          })}
        </CardGroup>
        {radioGroup}
      </Layout>
    )
  }
}
export const pageQuery = graphql`
  query BlogQuery{
       allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    edges {
      node {
    id
    html
	      frontmatter {
      path
          title
    date(formatString: "MM/DD/YYYY")
    coverImage {
              publicURL
              childImageSharp {
        fluid(maxWidth: 2000, maxHeight: 1100) {
          ...GatsbyImageSharpFluid
        }
      }
            }
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
