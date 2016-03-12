import React, { Component } from 'react'
import { Navbar, GridImages } from '../components'
import { correctImageSize, renderGrid } from '../utils'

class Search extends Component {
  constructor(props) {
    super(props)
    this.searchImagesEvent = this.searchImagesEvent.bind(this)
    this.state = {
      images: [],
      searchQuery: this.searchQuery()
    }
  }

  componentDidMount() {
    let { searchQuery } = this.state
    if (searchQuery !== null) {
      this.searchImages(searchQuery)
      document.querySelector('input').value = searchQuery
    }
  }

  searchQuery() {
    let split = window.location.hash.split('?')
    if (split.length === 1) {
      return null
    } else {
      return split[1]
    }
  }

  searchImages(query) {
    $.getJSON('/api/images', {query: query}, (data) => {
      this.setState({
        images: data
      })
    })
  }

  searchImagesEvent(e) {
    const query = e.target.value
    this.searchImages(query)
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
          <input className="search-field" type="text" placeholder="user or tag, ex: dan" onKeyUp={this.searchImagesEvent}/>
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
