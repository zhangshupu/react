import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/loading/loading.css'
export class Loading extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className='loading'>
        <img src="/loading.jpg" alt=""/>
      </div>
    )
  }
}

export default Loading
