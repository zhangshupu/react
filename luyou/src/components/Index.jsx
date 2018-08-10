import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import Home from './view/Home'
import Xiangqing from './view/Xiangqing'
class Index extends Component {
    constructor(props){
        super(props)
    }

  render() {
    return <Router>
        <div className='wrap'>
            <Switch>
                <Route path='/xiangqing' component={Xiangqing}/>
                <Route path='/home' component={Home}/>
                <Redirect exact from='/' to='/home'/>
                <Route component={()=><h4>找不到该页面</h4>}></Route>
            </Switch>
        </div>
    </Router>
  }
}

export default Index
