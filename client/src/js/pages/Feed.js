import React, { Component } from 'react'
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

  render() {
    const { images } = this.state
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

export default Feed
