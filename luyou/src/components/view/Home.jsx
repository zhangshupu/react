import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    NavLink,
    Redirect
} from 'react-router-dom';
import Child from './Child';
import Homer from './Homer'
import More from './More'
import '../../css/Index.css'
export default class Home extends Component {

  render() {
    return
        <div className='home'>
          <header>蝼蚁</header>
              <section>
                  <Switch>
                      <Redirect exact from='/home' to='/home/homer'/>
                      <Route path='/home/homer' component={Homer}/>
                      <Route path='/home/child' component={Child}/>
                      <Route path='/home/more' component={More}/>
                  </Switch>
              </section>
              <footer>
                  <NavLink to='/home/homer' >首页</NavLink>
                  <NavLink to='/home/child'>子页</NavLink>
                  <NavLink to='/home/more'>更多</NavLink>
              </footer>
        </div>
    
  }
}
