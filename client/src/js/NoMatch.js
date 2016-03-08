import React, { Component } from 'react'
import { SiteNav } from './components'

const NoMatch = () => {
  return (
    <div className="noMatch">
      <header>
        <SiteNav/>
      </header>
      <h2>404: Not Found!</h2>
    </div>
  )
}

export default NoMatch
