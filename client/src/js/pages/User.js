import React, { Component } from 'react'

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      userID: props.routeParams.userId
    }
  }

  render() {
    let dispText = (window.CURRENT_USER_USERNAME !== '' ? window.CURRENT_USER_USERNAME : window.CURRENT_USER_EMAIL)

    return (
      <div className="user">
        <div className='nav dropdown'>
          <img src='https://s3-us-west-1.amazonaws.com/asco-jkh/layout/icon_hamburger%402x.png'/>
        </div>

        <div className='nav droppeddown'>
          <div className='nav droppeddown close'>
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

export default User
