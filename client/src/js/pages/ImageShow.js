import React, { Component } from 'react'
import { HamburgerMenu, ImageComponent } from '../components'

class ImageShow extends Component {
  constructor(props) {
    super(props)
    this.prevImage = this.prevImage.bind(this)
    this.nextImage = this.nextImage.bind(this)
    this.state = {
      image: null,
      collection: null,
      index: -1,
      imageID: parseInt(props.routeParams.id)
    }
  }

  loadData() {
    $.getJSON('/api/images', { source: "img" + this.state.imageID}, (data) => {
      let index = -1;
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === this.state.imageID) index = i
      }

      this.setState({
        image: data[index],
        collection: data,
        index
      })
    })
  }

  componentDidMount() {
    this.loadData()
  }

  hasPrevImage() {
    let { index, collection } = this.state

    if (collection && index > 0 && collection.length > 1) {
      return true
    }

    return false
  }

  hasNextImage() {
    let { index, collection } = this.state

    if (collection && index < collection.length - 1 && collection.length > 1) {
      return true
    }

    return false
  }

  prevImage() {
    let { index, collection } = this.state

    if (collection && index > 0 && collection.length > 1) {
      this.setState({
        image: collection[index - 1],
        collection,
        index: index - 1
      })
      let split = window.location.hash.split('/')
      split[split.length - 1] = collection[index - 1].id
      window.location.hash = split.join('/')
    }

    return false
  }

  nextImage() {
    let { index, collection } = this.state

    if (collection && index < collection.length - 1 && collection.length > 1)
      this.setState({
        image: collection[index + 1],
        collection,
        index: index + 1
      })
      let split = window.location.hash.split('/')
      split[split.length - 1] = collection[index + 1].id
      window.location.hash = split.join('/')
      return

    return false
  }

  render() {
    let { image } = this.state, i = 0
    let prevImage, nextImage, content
    if (this.hasPrevImage()) prevImage = (
      <a onClick={this.prevImage} className="prev-image arrows"></a>
    )
    if (this.hasNextImage()) nextImage = (
      <a onClick={this.nextImage} className="next-image arrows"></a>
    )

    if (image) content = (
      <div>
        <div className="header">
          <a href={"#users/" + image.owner.id} className="image-show-title">
          {(image.owner['username'] ? image.owner['username'] : image.owner['email']) + ' — grid'}</a>
        </div>

        <div className="image-show clearfix">
          {prevImage}
          <ImageComponent src={image.url} className="image"/>
          {nextImage}
          <div className="image-description">
            {image.description}
            {image.tags.map(tag => {
              return (
                <a key={i++} href={'#/users/' + image.owner.id + '?' + tag.title} className='image-tag'>
                  {' #' + tag.title}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    )

    return (
      <div className="image-show">
        <HamburgerMenu/>

        {content}
      </div>
    )
  }
}

export default ImageShow
