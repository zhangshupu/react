import React, { Component } from 'react'
import '../css/home/home.css'
import '../fonts/iconfont.css'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink
} from 'react-router-dom'
import Loading from './Loading'
import ReactLoadable from 'react-loadable'
const Child=ReactLoadable({
    loader:()=>import('./Home/Child'),
    loading:Loading
})
export class Home extends Component {
  constructor(props){
    super(props)
    this.state={
        data:[],
        flag:true,
        index:0
    }
  }
  componentDidMount(){
      fetch('/list.json').then(res=>res.json())
      .then(json=>{
          console.log(json.json.keywordAreas)
          this.setState({
              data:json.json.keywordAreas,
              flag:false
          }) 
      })
  }
  onClick(ind){
    this.setState({
        index:ind
    })
  }
  render() {
    return (
        <div className='home'>
            <header>
                <span className='iconfont icon-xiangzuo'>
                </span><span>京东超市分类</span>
                <span>
                    <em className='iconfont icon-gengduo-2'></em>
                    <em className='iconfont icon-gengduo'></em>
                </span>
            </header>
            <section>
                <div className='left'>
                    {
                        this.state.data.map((item,index)=>{
                             return <NavLink key={index} to={{pathname:`/home/child${index}`,content:item.level1words}} onClick={()=>{this.onClick(index)}}>{item.areaName}</NavLink>
                        })
                    }
                </div>
                <div className='right'>
                    <Switch>
                        <Route path={`/home/child${this.state.index}`} component={Child}></Route>
                    </Switch>
                </div>
            </section>
            {this.state.flag?<Loading/>:null}
      </div>
    )
  }
}

export default Home
