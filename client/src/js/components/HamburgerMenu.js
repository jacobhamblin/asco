import React, { Component } from 'react'

class HamburgerMenu extends Component {
  constructor(props) {
    super(props)
    this.closeMenu = this.closeMenu.bind(this)
    this.openMenu = this.openMenu.bind(this)
    this.state = {
      open: false
    }
  }

  closeMenu() {
    this.setState({
      open: false
    })
  }

  openMenu() {
    this.setState({
      open: true
    })
  }

  render() {
    let dispText = (window.CURRENT_USER_USERNAME !== '' ? window.CURRENT_USER_USERNAME : window.CURRENT_USER_EMAIL)

    let style = (this.state.open ? {display: "block"} : {display: "none"})

    return (
      <div className='hamburgerMenu'>
        <div className='nav dropdown' onClick={this.openMenu}>
          <img src='https://s3-us-west-1.amazonaws.com/asco-jkh/layout/icon_hamburger%402x.png'/>
        </div>

        <div className='nav droppeddown' style={style}>
          <div className='nav droppeddown close' onClick={this.closeMenu}>
            <img src='https://s3-us-west-1.amazonaws.com/asco-jkh/layout/icon_close_26x26_white.png'/>
          </div>

          <a className='droppeddown user-avatar' href={'#users/' + window.CURRENT_USER_ID}>
            <img src={window.CURRENT_USER_AVATAR}/>
          </a>

          <div className='droppeddown user-info'>

            <h2>
              <a href={"#users/" + window.CURRENT_USER_ID}>
                {dispText}
              </a>
            </h2>

          </div>


          <ul className='droppeddown links'>
            <li><a href='#feed'>Feed</a></li>
            <li><a href='#grid'>Grid</a></li>
            <li><a href='#search'>Search</a></li>
            <li><a href='session/delete'>Sign Out</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default HamburgerMenu
