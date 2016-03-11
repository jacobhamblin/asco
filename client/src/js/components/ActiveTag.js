import React, { Component } from 'react'

const ActiveTag = ({tag, removeActiveTag}) => {
  return (
    <div className='selected-tag-space'>
      <div className='selected-tag'>
        {tag}
        <span className='remove-filter' onClick={removeActiveTag}>x</span>
      </div>
    </div>
  )
}

export default ActiveTag
