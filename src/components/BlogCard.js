import React, { Component, Fragment } from 'react'
import { Card } from 'semantic-ui-react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const ReadMore = styled.button`
  display: block;
  margin-top: 0.4rem;
  padding-left: 0;
  color: #808080;
  background: none;
  border: none;
  outline: none;
  &:hover {
    color: ${ props => props.theme.primary };
    cursor: pointer;
  }
`

const CustomCard = styled(Card)`
  &&& {
    box-shadow: 0 0 0 1px #d4d4d5, 0 6px 0 0 ${ props => props.theme.primary }, 0 1px 3px 0 #d4d4d5 !important;
  }
`

const ImageContainer = styled.div`
  padding: 1rem 1rem 0rem 1rem;
  margin-bottom: 1rem;
  background-color: #fff;
`

class BlogCard extends Component {
  constructor (props) {
    super(props)
    this.state = { showFullText: false }
    // props contains Text Block (Will Only Show ~20 Characters as an excerpt)
  }

  readMoreClicked = () => {
    console.log('CLICKED')
    this.setState(state => ({
      showFullText: !state.showFullText,
    }))
  }

  getFirstNWords (str, numOfWords) {
    return str.split(/\s+/).slice(0, numOfWords).join(' ')
  }

  descriptionData = (readString, htmlString) => {
    const { tags } = this.props
    return (
      <Fragment>
        <div dangerouslySetInnerHTML={{ __html: htmlString }}></div>
        <Card.Meta style={{ color: '#1c1c1c', margin: '1rem 0 0 0' }}>
          Tags: {tags.join(', ')}
        </Card.Meta>
        <ReadMore onClick={this.readMoreClicked}>{readString}</ReadMore>
      </Fragment>
    )
  }

  render () {
    const { text, author, title, date, coverImage } = this.props
    const { showFullText } = this.state
    let shownText = null
    let image = null
    // console.log(text)
    if (showFullText) {
      // shownText = <div dangerouslySetInnerHTML={{ __html: text }}></div>
      shownText = this.descriptionData('Read Less', text)
    } else {
      const readMoreText = `${ this.getFirstNWords(text, 20) }<span>[...]</span>`
      shownText = this.descriptionData('Read More', readMoreText)
    }
    if (coverImage) {
      console.log('Cover image found')
      const { childImageSharp: { fluid } } = coverImage
      image = (
        <ImageContainer>
          <Img style={{ margin: 0 }} fluid={fluid} />
        </ImageContainer>
      )
      console.log(image)
    } else {
      console.log('Nothing found')
    }

    return (
      <CustomCard
        fluid
        centered
      >
        {image}
        < Card.Content style={{ border: '0' }}>
          <Card.Header style={{ color: '#535462' }}>
            {title}
          </Card.Header>
          <Card.Meta style={{ color: '#1c1c1c', margin: '.5rem 0 1rem 0' }}>
            Posted on {date} By {author}
          </Card.Meta>
          <Card.Description style={{ color: 'black' }}>
            {shownText}
          </Card.Description>
        </Card.Content >
      </CustomCard >
    )
  }
}

export default BlogCard
