import React, { Component } from 'react'
import { Navbar, GridImages } from '../components'
import { correctImageSize, renderGrid } from '../utils'
import { searchImages } from '../actions'
import { connect } from 'react-redux'

class Search extends Component {
  constructor(props) {
    super(props)
    this.searchImagesEvent = this.searchImagesEvent.bind(this)
  }

  componentDidMount() {
    let { query } = this.props
    if (query !== null) {
      this.searchImages(query)
      document.querySelector('input').value = query
    }
  }

  searchImages(query) {
    const { dispatch } = this.props
    dispatch(searchImages(query))
  }

  searchImagesEvent(e) {
    const query = e.target.value
    this.searchImages(query)
  }

  render() {
    const { images } = this.props
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

function mapStateToProps(state) {
  const { grid, search } = state;
  const { images, lastUpdated, isFetching } = grid;
  const { query } = search;
  return {
    query,
    images,
    lastUpdated,
    isFetching
  }
}

export default connect(mapStateToProps)(Search)
