import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    NavLink,
    Redirect
} from 'react-router-dom';
export class Homer extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){

  }
  render() {
    return 
       <div>
          <Link to='/xiangqing'>跳转详情页</Link>
          吃饭饭
      </div>
  }
}

export default Homer
