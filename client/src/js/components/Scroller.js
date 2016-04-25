import React, { Component } from 'react'
import { moreImages, resetScroll } from '../actions'
import { connect } from 'react-redux'
import { getDocHeight, getScrollXY } from '../utils'


class Scroller extends Component {
  constructor(props) {
    super(props)
    this.bottomScroll = this.bottomScroll.bind(this)
  }

  bottomScroll() {
    const { dispatch } = this.props
    if (
      getDocHeight() == getScrollXY()[1] + window.innerHeight ||
      document.body.clientHeight < window.innerHeight
    ) {
      dispatch(moreImages())
    }
  }

  componentDidMount() {
    this.bottomScroll()
    document.addEventListener('scroll', this.bottomScroll)
  }

  componentWillUnmount() {
    const { dispatch } = this.props

    document.removeEventListener('scroll', this.bottomScroll)
    dispatch(resetScroll())
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { scroll } = state
  return {
    scroll
  }
}

export default connect(mapStateToProps)(Scroller)
