import React, { Component } from 'react'
import { GridImages, Navbar } from '../components'

class Grid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: []
    }
  }

  componentDidMount() {
    let url = '/api/images'
    $.getJSON(url, {source: "grid"}, (data) => {
      this.setState({
        images: data
      })
    })
  }

  componentDidUpdate() {
  }

  gridIconClick() {
    if ( $('.grid-description').html() === '') {
      $('.grid-description').html("<p>A showcase of exceptional images from around the globe. Download VSCO Cam® to shoot, edit, and share photographs.</p><a href='http://vsco.co/vscocam'>vsco.co/vscocam</a>");
    } else {
      $('.grid-description').html('');
    }
  }

  render() {
    const { images } = this.state
    let gridImages = null
    gridImages = (images.length > 0 ? <GridImages images={images} size={'262'}/> : null)

    return (
      <div className="grid">
        <Navbar/>
        <img
        src="https://s3-us-west-1.amazonaws.com/asco-jkh/layout/profile.jpg"
        className="grid-icon" onClick={this.gridIconClick}/>

        <div className='grid-description'></div>

        {gridImages}

      </div>
    )
  }
}

export default Grid
