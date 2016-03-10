import React, { Component } from 'react'
import { renderGrid, correctImageSize } from '../utils'

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

  assembleImages() {
    let { images } = this.state
    let i = 0
    images = images.map(image => {
      return <div className="item" key={i++}>
        <a className="image-item-a" href={'#/images/' + image.id}><img className="image-item" src={correctImageSize(image.url, '262')}/></a>
        <a href="" className="image-owner">
          {image.owner.username ? image.owner.username : image.owner.email} <br/>
        </a>
      </div>
    })

    return images
  }

  render() {
    const { images } = this.state
    let assembleImages = null
    assembleImages = (images.length > 0 ? this.assembleImages() : null)

    return (
      <div className="feed">
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
          {assembleImages}

        </div>
      </div>
    )
  }
}

export default Feed
