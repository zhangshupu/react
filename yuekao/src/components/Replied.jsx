import React, { Component } from 'react'
import {connect} from 'react-redux';
import '../fonts/iconfont.css'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom'
import '../css/replied/replied.css'
class Replied extends Component {
  componentDidMount(){
  }

  render() {
    return (
      <div className='replid'>
        {
            this.props.list.map((item)=>{
                if(item.reply){
                    return  <Link to={`/index/details?id=${item.id}`} onClick={()=>{this.props.click(item.id)}} key={item.id}>
                                <h3>
                                    {item.reade?null:<em>未读</em>}
                                    {item.title}
                                </h3>
                                <p>
                                    <em>￥{item.price}</em>
                                    <span>已回复</span>
                                    <span>精华</span>
                                </p>
                                <em className='iconfont icon-angle-right'></em>
                        </Link>
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
  return {
    click:(id)=>{
        dispatch((dispatch)=>{
            dispatch({
                type:'LIST_INDEX',
                palyload:id
            })
        })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Replied)

