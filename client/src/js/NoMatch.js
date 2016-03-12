import React, { Component } from 'react'
import { Navbar } from './components'

const NoMatch = () => {
  return (
    <div className="noMatch">
      <Navbar/>
      <h2>404: Not Found!</h2>
    </div>
  )
}

export default NoMatch
