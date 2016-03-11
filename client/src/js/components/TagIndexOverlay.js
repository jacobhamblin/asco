import React, { Component } from 'react'

const TagIndexOverlay = ({tags, setActiveTag, hideTags}) => {
  let i = 0
  return (
    <div className='tag-index-overlay' onClick={hideTags}>
      <h4>Filter By Tag</h4>
      <div className='tag-list'>
        {tags.map(tag => {
          return (
            <a onClick={setActiveTag} key={i++}>{tag}</a>
          )
        })}
      </div>
    </div>


  )
}

export default TagIndexOverlay
