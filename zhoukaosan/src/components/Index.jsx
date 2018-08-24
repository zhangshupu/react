import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../css/index.css'
import '../fonts/iconfont.css'
class Index extends Component {
  constructor(props){
    super(props);
    this.state={
      sum:0
    }
  }
  componentWillReceiveProps(stateNext,propsNext){
      let cont=0;
      this.props.list.forEach(element => {
        if(element.isSlece){
         cont=cont+1
        }
      });
      this.setState({
        sum:cont
      })
  } 
  mousemove(ind){
    this.refs['span'+ind].className='span'
  }
  mouseLeave(ind){
    this.refs['span'+ind].className=''
  }
  render() {
    return (
      <div className='wrap'>
        <div className='left'>
          {
            this.props.list.map((item,index)=>{
              return  <dl key={index} onMouseMove={()=>{this.mousemove(index)}} onMouseLeave={()=>{this.mouseLeave(index)}}  className={item.isSlece?'active':null}>
                        <dt className={`iconfont ${item.icon}`}></dt>
                        <dd>{item.name}</dd>
                        <span ref={`span${index}`}><em onClick={()=>{this.props.click(index)}} className='iconfont icon-gouwuche'></em><em className="iconfont icon-10"></em></span>
                    </dl>
            })
          }
        </div>
        <div className='right'>
          <span className='iconfont icon-gouwuche'><em>{this.state.sum}</em></span>
          
        </div>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return state
}
const mapDispatchToProps=(dispatch)=>{
  return {
    click:(ind)=>{
      dispatch({
        type:'NEWLIST',
        playload:ind
      })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Index) 
