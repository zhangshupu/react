import React, { Component } from 'react'
import '../css/Index.css'
import RouterView from '../router/RouterView'
import {NavLink} from 'react-router-dom'
export class Home extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div className='home'>
           <header>蝼蚁</header>
           <section>
                <RouterView routes={this.props.routes}></RouterView>
           </section>
           <footer>
                  <NavLink to='/home/homer' >首页</NavLink>
                  <NavLink to='/home/child'>子页</NavLink>
                  <NavLink to='/home/more'>更多</NavLink>
            </footer> 
      </div>
    )
  }
}

 export default Home

