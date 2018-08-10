import React, { Component } from 'react'
import Loading from './Loading'
import '../css/Details/details.css'
export class Details extends Component {
  constructor(props){
      super(props)
      this.state={
          city:''
      }
  }
  oncity(){
    let script=document.createElement('script');
    script.src='http://pv.sohu.com/cityjson?ie=utf-8';
    document.body.appendChild(script);
    script.onload=()=>{
        this.setState({
            city:window.returnCitySN.cname
        })
    }
  }
  render() {
      if(!this.props.location.list){
        return null
      }
    return (
      <div className='details'>
        <header><span onClick={this.oncity.bind(this)}>定位：</span>{this.state.city}</header>
        <dl>
            <dt><img src={this.props.location.list.imageUrl} alt=""/></dt>
            <dd>{this.props.location.list.keyword}</dd>
        </dl>
      </div>
    )
  }
}

export default Details
