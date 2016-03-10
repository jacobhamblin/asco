import React, { Component } from 'react'

const Navbar = () => {
  let currentUser = null
  if (window.CURRENT_USER_ID) {
    currentUser = (
      <li className="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">{window.CURRENT_USER_EMAIL}<span className="caret"></span></a>
        <ul className="dropdown-menu" role="menu">
          <li className="dropdown-item"><a href={"#users/" + window.CURRENT_USER_ID}>My Grid</a></li>
          <li className="dropdown-item"><a href="session/delete">Sign Out</a></li>
        </ul>
      </li>
    )
  } else {
    currentUser = (
      <a href="/session/new">Sign In</a>
    )
  }

  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a href=""><img src="https://s3-us-west-1.amazonaws.com/asco-jkh/layout/logo-navbar.png"/></a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">

          </ul>
          <form className="navbar-form navbar-left" role="search">
          </form>
          <ul className="nav navbar-nav navbar-right">
            <li className='li-feed'><a href="#feed">Feed</a></li>
            <li className='li-grid'><a href="#grid">Grid</a></li>
            {currentUser}
            <li className='navbar-search-li'><a href="#search" className="navbar-search-a"><img src='https://s3-us-west-1.amazonaws.com/asco-jkh/layout/search_icon.png'/></a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
