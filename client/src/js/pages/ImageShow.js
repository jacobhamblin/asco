import React, { Component } from 'react'
import { HamburgerMenu, ImageComponent } from '../components'
import { fetchImagesShow, adjustIndex } from '../actions'
import { connect } from 'react-redux'

class ImageShow extends Component {
  constructor(props) {
    super(props)
    this.prevImage = this.prevImage.bind(this)
    this.nextImage = this.nextImage.bind(this)
    window.comp = this
  }

  componentDidMount() {
    let { routeParams, dispatch } = this.props
    let { id } = routeParams
    dispatch(fetchImagesShow('img' + id))
  }

  hasPrevImage() {
    let { index, collection } = this.props

    if (collection && index > 0 && collection.length > 1) {
      return true
    }

    return false
  }

  hasNextImage() {
    let { index, collection } = this.props

    if (collection && index < collection.length - 1 && collection.length > 1) {
      return true
    }

    return false
  }

  prevImage() {
    let { index, collection, dispatch } = this.props

    if (collection && index > 0 && collection.length > 1) {
      dispatch(adjustIndex(-1))

      let split = window.location.hash.split('/')
      split[split.length - 1] = collection[index - 1].id
      window.location.hash = split.join('/')
    }

    return false
  }

  nextImage() {
    let { index, collection, dispatch } = this.props

    if (collection && index < collection.length - 1 && collection.length > 1) {
      dispatch(adjustIndex(1))

      let split = window.location.hash.split('/')
      split[split.length - 1] = collection[index + 1].id
      window.location.hash = split.join('/')
    }

    return false
  }

  render() {
    let { image } = this.props, i = 0
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

function mapStateToProps(state) {
  const { imageShow } = state
  const { image, lastUpdated, isFetching, collection, index } = imageShow
  return {
    image,
    lastUpdated,
    isFetching,
    collection,
    index
  }
}

export default connect(mapStateToProps)(ImageShow)
