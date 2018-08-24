import React, { Component } from 'react'
import {connect} from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch,
    Redirect
  } from 'react-router-dom'
import Replied from './Replied'
import Response from './Response'
import '../css/home/home.css'
class Home extends Component {
  render() {
    return (
      <div className='home'>
         <div className='top'>
            <NavLink to='/index/home/replied'>已回复</NavLink>
            <NavLink to='/index/home/response'>未回复</NavLink>
        </div>
        <div className='bottom'>
            <Switch>
                <Redirect exact from='/index/home' to='/index/home/replied' component={Replied}></Redirect>
                <Route path='/index/home/replied' component={Replied}></Route>
                <Route path='/index/home/response' component={Response}></Route>
            </Switch>
        </div>
      </div>
    )
  }
}

export default connect()(Home) 