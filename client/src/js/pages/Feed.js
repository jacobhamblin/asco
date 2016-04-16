import React, { Component } from 'react'
import { GridImages, Navbar } from '../components'
import { fetchImages } from '../actions'
import { connect } from 'react-redux'

class Feed extends Component {
  constructor(props) {
    super(props)
    window.feed = this
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchImages('source', 'feed'))
  }

  render() {
    const { images, lastUpdated, isFetching } = this.props
    let gridImages = null
    gridImages = (images && images.length > 0 ? <GridImages author={true} images={images} size={'262'}/> : null)

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
  const { grid } = state
  const { images, lastUpdated, isFetching } = grid
  return {
    images,
    lastUpdated,
    isFetching
  }
}

export default connect(mapStateToProps)(Feed)
