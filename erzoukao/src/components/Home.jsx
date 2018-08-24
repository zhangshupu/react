import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    NavLink
} from 'react-router-dom'
import '../fonts/iconfont.css'
import '../css/home/home.css'
import Homer from './view/homer'
export class Home extends Component {
  constructor(props){
      super(props)
      this.state={
          data:[],
          index:0
      }
  }
  componentDidMount(){
    axios.get('https://www.easy-mock.com/mock/5b62c28f3469e27da6596a3b/example/api/list').then(res=>{
        this.setState({
            data:res.data
        })
    })
  }
  click(ind){
    this.setState({
        index:ind
    })
  }
  render() {
    return (
      <div className='home'>
        <header>
            <span className='iconfont icon-xiangzuo'>
            </span><span>条件选车</span>
            <span></span>
        </header>
        <section>
            <div className='left'>
                {
                    this.state.data.map((item,index)=>{
                        return <NavLink onClick={()=>{this.click(index)}} className={this.state.index==index?"active":null} key={index} to={`/home/homer${index}?id=${index}`}>{item.name}</NavLink>
                    })
                }
            </div>
            <div className='right'>
                {
                    this.state.data.map((item,index)=>{
                        return <Route key={index} path={`/home/homer${index}`} component={Homer}></Route>
                    })
                }
            </div>
        </section>
      </div>
    )
  }
}

export default Home
