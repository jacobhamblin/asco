import React, { Component } from 'react'
import { GridImages, Navbar } from '../components'
import { fetchImages } from '../actions'
import { connect } from 'react-redux'

class Feed extends Component {
  constructor(props) {
    super(props)
    window.feed = Feed;
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchImages('feed'))
  }

  render() {
    const { images, lastUpdated, isFetching } = this.props
    let gridImages = null
    gridImages = (images.length > 0 ? <GridImages author={true} images={images} size={'262'}/> : null)

    return (
      <div className="feed">
        <Navbar/>
          <div className="feed-header">
            <div className="white-pixel">
              <img src="https://s3-us-west-1.amazonaws.com/asco-jkh/layout/whitepixel.png"/>
            </div>
            <div className="following">
              <right>
                Following
              </right>
            </div>
          </div>
          {gridImages}

      </div>
    )
  }
}

function mapStateToProps(state) {
  const { displayStyle } = state
  const imagesState = state.images
  const { images, lastUpdated, isFetching } = imagesState
  return {
    images,
    lastUpdated,
    isFetching
  }
}

export default connect(mapStateToProps)(Feed)
