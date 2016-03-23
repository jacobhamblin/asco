import React, { Component } from 'react'
import { correctImageSize } from '../utils'
import { ImageComponent } from '../components'

function owner(image, author) {
  if (author) {
    return (
      <a href="" className="image-owner">
        {image.owner.username ? image.owner.username : image.owner.email} <br/>
      </a>
    )
  } else {
    return null
  }
}

const GridImages = ({images, size, author}) => {
  let i = 0

  return (
    <div className="grida-images">
      {images.map(image => {
        return <div className="item" key={i++}>
          <a className="image-item-a" href={'#/images/' + image.id}>
            <ImageComponent className="image-item" src={correctImageSize(image.url, size)}/>
          </a>
          {owner(image, author)}
        </div>
      })}

    </div>
  )
}

export default GridImages
