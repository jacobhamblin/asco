import React, { Component } from 'react'
import { Navbar, GridImages } from '../components'
import { correctImageSize, renderGrid } from '../utils'

class Search extends Component {
  constructor(props) {
    super(props)
    this.searchImages = this.searchImages.bind(this)
    this.state = {
      images: []
    }
  }

  searchImages(e) {
    const query = e.target.value
    $.getJSON('/api/images', {query: query}, (data) => {
      this.setState({
        images: data
      })
    })
  }

  render() {
    const { images } = this.state
    let gridImages = null
    gridImages = (images.length > 0 ? <GridImages images={images} size={'262'}/> : null)

    return (
      <div className="search">
        <Navbar/>
        <div className="search-header">
          <center>
          <input className="search-field" type="text" placeholder="user or tag, ex: dan" onKeyUp={this.searchImages}/>
          <ul className="search-options">
            <li>images</li>
          </ul>
          </center>
        </div>

        <div className="search-grid">
          {gridImages}
        </div>
      </div>
    )
  }
}

export default Search
