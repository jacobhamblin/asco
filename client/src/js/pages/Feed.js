import React, { Component } from 'react'
import { renderGrid } from '../utils'
import { GridImages, Navbar } from '../components'

class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: []
    }
  }

  componentDidMount() {
    let url = '/api/images'
    $.getJSON(url, {source: "feed"}, (data) => {
      this.setState({
        images: data
      })
    })
  }

  componentDidUpdate() {
    if (this.state.images) renderGrid()
  }

  render() {
    const { images } = this.state
    let gridImages = null
    gridImages = (images.length > 0 ? <GridImages images={images}/> : null)

    return (
      <div className="feed">
        <Navbar/>
        <div className="grida-images">
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
      </div>
    )
  }
}

export default Feed
