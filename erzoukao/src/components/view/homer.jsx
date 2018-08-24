import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../css/homer/homer.css'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    NavLink,
    Link
} from 'react-router-dom'
export class homer extends Component {
  constructor(props){
      super(props)
      this.state={
          data:[]
      }
  }
componentDidMount(){
    axios.get('https://www.easy-mock.com/mock/5b62c28f3469e27da6596a3b/example/api/list').then(res=>{
        if(this.props.location.search){
                this.setState({
                data:res.data[this.props.location.search.slice(4)].list
            })
        }else{
            this.setState({
                data:res.data[0].list
            })
        }
    })
}
  render() {
    return (
      <div className='homer'>
      {
          this.state.data.map((item,index)=>{
              return <Link to={{pathname:'/details',content:item}} key={index}>
                <dl >
                    <dt><img src={item.url} alt=""/></dt>
                    <dd>
                        <h4>{item.title}</h4>
                        <p>{item.price}</p>
                    </dd>
                </dl>
              </Link>
              
          })
      }
      </div>
    )
  }
}

export default homer
