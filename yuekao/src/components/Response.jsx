import React, { Component } from 'react'
import {connect} from 'react-redux';
import '../fonts/iconfont.css'
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch,
    Redirect
  } from 'react-router-dom';
import '../css/response/response.css'
class Response extends Component {
  render() {
    return (
        <div className='response'>
            {
                this.props.list.map((item)=>{
                    if(!item.reply){
                        return  <li key={item.id}>
                                    <h3>
                                        {item.reade?null:<em>未读</em>}
                                        {item.title}
                                    </h3>
                                    <p>
                                        <em>￥{item.price}</em>
                                        <span>未回复</span>
                                        <span>精华</span>
                                    </p>
                                    <em className='iconfont icon-angle-right'></em>
                                </li>
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
export default connect(mapStateToProps)(Response)
