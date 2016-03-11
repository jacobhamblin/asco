import React, { Component } from 'react'

const UserHeader = ({user}) => {
  return (
    <div className="header-usergrid">
      <center>
        <img src={user['avatar']} className="avatar-usergrid"/><br/>
        <span className="user-show-title"> {(user['username'] ? user['username'] : user['email'])}</span>
      <div className='follow-space'></div>
      </center>
    </div>
  )
}

export default UserHeader
