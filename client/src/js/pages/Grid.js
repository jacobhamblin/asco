import React, { Component } from 'react'
import { GridImages, Navbar, Scroller } from '../components'
import { fetchImages } from '../actions'
import { connect } from 'react-redux'

class Grid extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchImages('source', 'grid'))
  }

  gridIconClick() {
    if ( $('.grid-description').html() === '') {
      $('.grid-description').html("<p>A showcase of exceptional images from around the globe. Download VSCO Cam® to shoot, edit, and share photographs.</p><a href='http://vsco.co/vscocam'>vsco.co/vscocam</a>");
    } else {
      $('.grid-description').html('');
    }
  }

  render() {
    const { images, lastUpdated, isFetching, scroll } = this.props
    let gridImages = null
    gridImages = (images && images.length > 0 ? <GridImages images={images.slice(0, scroll.blocksLoaded * 12)} author={true} size={'262'}/> : null)

    return (
      <Scroller>
        <div className="grid">
          <Navbar/>
          <img
          src="https://s3-us-west-1.amazonaws.com/asco-jkh/layout/profile.jpg"
          className="grid-icon" onClick={this.gridIconClick}/>

          <div className='grid-description'></div>

          {gridImages}

        </div>
      </Scroller>
    )
  }
}

function mapStateToProps(state) {
  const { grid, scroll } = state
  const { images, lastUpdated, isFetching } = grid
  return {
    images,
    lastUpdated,
    isFetching,
    scroll
  }
}

export default connect(mapStateToProps)(Grid)
