import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
export class Homer extends Component {
  static propTypes = {

  }
  render() {
    return (
      <div>
        吃饭饭
        <Link to='/xiangqing'>跳转详情页</Link>
      </div>
    )
  }
}

export default Homer

