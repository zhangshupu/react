import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { width } from 'window-size';
import '../css/details/details.css'
export class Details extends Component {
  static propTypes = {

  }
  click(){
    window.history.go(-1)
  }
  render() {
    return (
      <div className='details'>
        <button onClick={this.click.bind(this)}>返回上一页</button>
        {
          this.props.location.content?
          <dl>
            <dt><img src={this.props.location.content.url} alt=""/></dt>
            <dd>
              <h3>{this.props.location.content.title}</h3>
              <p>{this.props.location.content.price}</p>
            </dd>
          </dl>:null
        }
      </div>
    )
  }
}

export default Details
