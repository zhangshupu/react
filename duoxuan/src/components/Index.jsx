import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../css/index.css'
class Index extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className='wrap'>
        <div className='top'>
          <span>筛选条件：</span>
          {
            this.props.list.map((item,index)=>{
              if(item.isSelect){
                return <em key={index} className='active'>{item.name}</em>
              }
            })
          }
          <span onClick={()=>{this.props.All()}}>清除全部</span>
        </div>
        <div className='botton'>
          <span>品种</span>
          {
            this.props.list.map((item,index)=>{
              return <em key={index} onClick={()=>{this.props.click(index,this.props.isSelectAll)}} className={item.isSelect?'active':null}>{item.name}</em>
            })
          }
          <span onClick={()=>{this.props.select(!this.props.isSelectAll)}}>{this.props.isSelectAll?'多选':'单选'}</span>
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
    select:(selecter)=>{
      dispatch((dispatch,getState)=>{
        dispatch({
            type:'SELECTALL',
        })
        if(!selecter){
          dispatch({
            type:'NEWLIST'
          })
        }
      })
    },
    click:(ind,selecter)=>{
      dispatch({
        type:'CLICK_LIST',
        palyload:[ind,selecter]
      })
    },
    All:()=>{
      dispatch({
        type:'CLEARALL'
      })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Index) 
