import React, { Component } from 'react'
import Details from './Details'
import Home from './Home'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
export class Index extends Component {
  static propTypes = {

  }

  render() {
    return (<Router>
         <div className='wrap'>
        <Switch>
            <Redirect exact from='/' to='/home/homer0' component={Home}></Redirect>
            <Route path='/details' component={Details}></Route>
            <Route path='/home' component={Home}></Route>
            <Route component={()=><h4>找不到该页面</h4>}></Route>
            
        </Switch>
      </div>
    </Router>
     
    )
  }
}

export default Index
