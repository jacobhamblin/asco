import React, { Component } from 'react'
import { GridImages, Navbar, Scroller } from '../components'
import { connect } from 'react-redux'
import { fetchImages } from '../actions'

class Feed extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchImages('source', 'feed'))
  }

  render() {
    const { images, lastUpdated, isFetching, scroll } = this.props
    let gridImages = null
    gridImages = (images && images.length > 0 ? <GridImages author={true} images={images.slice(0, scroll.blocksLoaded * 12)} size={'262'}/> : null)

    return (
      <Scroller>
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
      </Scroller>
    )
  }
}

function mapStateToProps(state) {
  const { grid, scroll } = state
  const { images, lastUpdated, isFetching } = grid
  return {
    images,
    lastUpdated,
    isFetching,
    scroll
  }
}

export default connect(mapStateToProps)(Feed)
