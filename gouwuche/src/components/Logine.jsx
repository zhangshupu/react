import React, { Component } from 'react'
import {connect} from 'react-redux'
import {
  NavLink,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import '../css/logine/logine.css'
export class Logine extends Component {
  render() {
    return (
      <div className='logine'> 
        <h3>账号：<input type="text"/></h3>
        <h3>密码：<input type="text"/></h3>
        <NavLink to='/home/app/onebox'><button onClick={()=>{this.props.click()}}>登陆</button></NavLink>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
      state
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    click:()=>{
      dispatch({
        type:'LOGINE'
      })
    }
  } 
}
export default connect(mapStateToProps,mapDispatchToProps)(Logine) 
