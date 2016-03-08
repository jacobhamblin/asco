import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import '../scss/index.scss'


class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
        </header>
        {this.props.children}
        <footer>
        </footer>
      </div>
    )
  }
}

export default App
