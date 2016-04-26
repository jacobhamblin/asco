import React, { Component } from 'react'
import { Loading } from '../components'

class ImageComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      img: null
    }
  }

  imageReady(img) {
    this.setState({
      img
    })
  }

  fetchImage() {
    let { className, src } = this.props
    const component = this
    let img = new Image()

    img.src = src
    img.className = className
    // if (img.complete) this.imageReady(img)
    img.addEventListener('load', (e) => {
      component.imageReady(e.target)
    })
  }

  componentDidMount() {
    window.ImageComponent = this
    this.fetchImage()
  }

  componentWillReceiveProps(props) {
    if (props.src !== this.props.src) this.setState({img: null})
  }

  componentDidUpdate() {
    this.fetchImage()
  }

  render() {
    let { img } = this.state
    if (img) {
      return (<img className={img.className} src={img.src}/>)
    }

    return (
      <Loading/>
    )
  }
}

export default ImageComponent
