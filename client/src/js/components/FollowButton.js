import React, { Component } from 'react'

const FollowButton = ({user, toggleFollow}) => {
  let button
  if (user.follow) {
    button = (
      <a href="javascript:void(0)" className='follow-icon-a'>
        <img src='https://s3-us-west-1.amazonaws.com/asco-jkh/layout/icon_follow_circle.png' className='nav-follow-icon followed'/>
      </a>
    )
  } else {
    <a href="javascript:void(0)" className='follow-icon-a'>
      <img src='https://s3-us-west-1.amazonaws.com/asco-jkh/layout/icon_follow_plus.png' className='nav-follow-icon follow'/>
    </a>
  }


  return (
    <div className='nav-user' onClick={toggleFollow}>
      <div className='nav-follow-toggle'>
        {button}
      </div>
    </div>
  )
}

export default FollowButton
