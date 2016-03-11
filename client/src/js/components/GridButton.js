import React, { Component } from 'react'

const GridButton = ({vertical, toggleVertical}) => {
  let button
  if (vertical) {
    button = (
      <a className='grid-view-a' href='javascript:void(0)'>
        <div className='vert-box'></div>
      </a>
    )
  } else {
    button = (
      <a className='grid-view-a' href="javascript:void(0)">
        <img src='https://s3-us-west-1.amazonaws.com/asco-jkh/layout/grid_view_icon.svg' className='grid-view'/>
      </a>
    )
  }

  return (
    <div className='view-toggle' onClick={toggleVertical}>
      {button}
    </div>
  )
}

export default GridButton
