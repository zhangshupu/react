import React, { Component } from 'react'
import {connect} from 'react-redux';
import '../fonts/iconfont.css'
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch,
    Redirect
  } from 'react-router-dom'
import '../css/details/details.css'
class Details extends Component {
  static propTypes = {

  }
  render() {
    return (
      <div className='details'>
        {
          this.props.list.map((item)=>{
            if(item.id==this.props.location.search.slice(4)){
              return <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            }
          })
        }
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return state
}
const mapDispatchToProps=(dispatch)=>{
  return{
   
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Details) 
