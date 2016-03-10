import React, { Component } from 'react'
import { correctImageSize } from '../utils'

const GridImages = ({images}) => {
  let i = 0

  return (
    <div className="grida-images">
      {images.map(image => {
        return <div className="item" key={i++}>
          <a className="image-item-a" href={'#/images/' + image.id}><img className="image-item" src={correctImageSize(image.url, '262')}/></a>
          <a href="" className="image-owner">
            {image.owner.username ? image.owner.username : image.owner.email} <br/>
          </a>
        </div>
      })}

    </div>
  )
}

export default GridImages
