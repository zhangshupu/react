import React, { Component } from 'react'
import {connect} from 'react-redux';
import '../fonts/iconfont.css'
import '../css/index/index.css'
import Home from './Home'
import Replied from './Replied'
import Details from './Details'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom'
class Index extends Component {
  constructor(state){
    super(state)
  }
  componentDidMount(){
    this.props.fetch()
  }
  render() {
    return (
      <Router>
        <div className='wrap'>
            <header>
                <span className='iconfont icon-xiangzuo' onClick={()=>{this.props.click()}}></span>
                <span>我的提问</span>
                <span className='iconfont icon-gengduo-2'></span>
            </header>
            <section>
                <Switch>
                    <Redirect exact from='/' to='/index/home' component={Home}></Redirect>
                    <Route path='/index/home' component={Home}></Route>
                    <Route path='/index/details' component={Details}></Route>
                </Switch>
            </section>
        </div>
      </Router>
    )
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    fetch:()=>{
      fetch('/data.json')
      .then(res=>res.json())
      .then((body)=>{
          dispatch({
              type:'NEWLIST',
              palyload:body.list
          })
    })
  },
    click:()=>{
      window.history.go(-1)
    }
  }
}
export default connect(null,mapDispatchToProps)(Index) 
