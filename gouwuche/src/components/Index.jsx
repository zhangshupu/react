import React, { Component } from 'react'
import {connect} from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
  Redirect
} from 'react-router-dom';
import '../css/index/index.css'
import Logine from './Logine';
import Home from './Home'
import Onebox from './home/app/Onebox'
 class Index extends Component {
    
  render() {
    return (<Router>
       <div className='index'>
           <Switch>
                <Redirect exact from='/' to='/home/app/onebox' component={Onebox}></Redirect>
                <Route path='/home' component={Home}></Route>
                <Route path='/logine' component={Logine}></Route>
           </Switch>
      </div>
    </Router>)
  }
}

export default connect()(Index)
