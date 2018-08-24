import React, { Component } from 'react'
import '../../../css/onebox/onebox.css'
import {connect} from 'react-redux'
class Onebox extends Component {
    constructor(props){
        super(props)
    }
  render() {
      console.log(this.props)
    return (
        <div className='onebox'>
            {
                this.props.state.list.map((item,index)=>{
                    return  <dl key={index}>
                                <dt><img src={item.img} alt=""/></dt>
                                <dd>
                                    <h4>{item.name}</h4>
                                    <p>{item.content}</p>
                                    <h3>
                                        <span className='price'>{item.price}/盒</span>
                                        {
                                            item.isSelect?
                                            <span className='sum'>
                                                <em onClick={()=>{this.props.Minus(item.id)}}>-</em>
                                                <em>{item.num}</em>
                                                <em onClick={()=>{this.props.Plus(item.id)}}>+</em>
                                            </span>:
                                            <span onClick={()=>{this.props.clickGou(item.id)}} className='gouwuche iconfont icon-gouwuche'></span>
                                        }
                                    </h3>
                                </dd>
                            </dl>
                })
            }
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
        clickGou:(id)=>{
            dispatch({
                type:'SHOWGOU',
                playload:id
            })
        },
        Minus:(id)=>{
            dispatch({
                type:'MINUS',
                playload:id
            })
        },
        Plus:(id)=>{
            dispatch({
                type:'PLUS',
                playload:id
            })
        }
    }
  
}
export default connect(mapStateToProps,mapDispatchToProps)(Onebox) 
