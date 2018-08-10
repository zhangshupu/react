import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom'
import ReactLoadable from 'react-loadable';
import Loading from '../components/Loading';

const Details=ReactLoadable({
    loader:()=>import('./Details'),
    loading:Loading
})
const Home=ReactLoadable({
    loader:()=>import('./Home'),
    loading:Loading
})

export class Index extends Component {
    constructor(props){
        super(props)
    }

  render() {
    return <Router>
        <div className='wrap'>
            <Switch>
                <Route path='/home' component={Home}></Route>
                <Route path='/details' component={Details}></Route>
                <Redirect exact from='/' to='/home/child0'></Redirect>
                <Route component={()=><h4>客官，找不到该页面！</h4>}></Route>
            </Switch>
        </div>
    </Router> 
  }
}

export default Index
