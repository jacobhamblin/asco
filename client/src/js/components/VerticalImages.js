import React, { Component } from 'react'
import { correctImageSize } from '../utils'

const VerticalImages = ({images, size}) => {
  let i = 0, j = 0

  return (
    <div className="vert-images">
      {images.map(image => {
        return <div className="item vertical" key={i++}>
          <a className="image-item-a" href={'#/images/' + image.id}><img className="image-item" src={correctImageSize(image.url, size)}/></a>
          <div className="image-description user-show">
            {image['description']}
            {image.tags.map(function(tag) {
              return (
                <a href="#" className="image-tag" key={j++}>
                   {' #' + tag['title']}
                </a>
              )
            })}
          </div>
        </div>
      })}

    </div>
  )
}

export default VerticalImages
