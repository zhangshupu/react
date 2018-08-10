import React, { Component } from 'react'
import '../../css/child/child.css'
import {Link} from 'react-router-dom'
import Loading from '../Loading'
export class Child extends Component {
    constructor(props){
        super(props)
        this.state={
        }
    }
    componentWillReceiveProps(nextProps) {
        
     }
  render() {
      if (!this.props.location.content){
          return null;
      }
    return (
      <div className='child'>
          {
              this.props.location.content.map((item,index)=>{
               return <div key={index}>
                    <h4>{item.keyword}</h4>
                    <div>
                        {item.level2words.map((value,key)=>{
                        return <Link key={key} to={{pathname:'/details',list:value}}>
                            <dl>
                                <dt><img src={value.imageUrl} alt=""/></dt>
                                <dd>{value.keyword}</dd>
                            </dl>
                        </Link>
                    })}
                    </div>
                </div>
              })
          }
      </div>
    )
  }
}

export default Child
