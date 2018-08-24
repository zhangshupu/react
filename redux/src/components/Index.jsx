import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../css/index.css'
class Index extends Component {
    componentDidMount(){
        this.props.fetchData()
    }
  render() {
     let {list, countryIndex, provinceIndex} =this.props
     if(!list.length){
         return null
     }
     let provinces=list[countryIndex].list;
     let citys=provinces[provinceIndex].list;
    return (
      <div className='wrap'>
        <header>
            {
                list.map((item,index)=>{
                    return <span key={index} onClick={()=>{this.props.countryClick(index)}} className={countryIndex==index?'active':null}>{item.name}</span>
                })
            }
        </header>
        <section>
            <div className="left">
                {
                    provinces.map((item,index)=>{
                        return  <li key={index} onClick={()=>{this.props.provincesClick(index)}} className={provinceIndex==index?'active':null}>{item.name}</li>
                    })
                }
            </div>
            <div className="right"> 
                    {
                        citys.map((item,index)=>{
                            return <li key={index}>
                                <h4>{item.name}</h4>
                                {
                                    item.list.map((value,key)=>{
                                       return <span key={key}>{value}</span>
                                    })
                                }
                            </li>
                        })
                    } 
            </div>
        </section>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
    return state
}
const mapDispatchToProps=(dispatch)=>{
    return {
        fetchData:()=>{
            fetch('/index.json').then(res=>res.json())
                .then(body=>{
                    dispatch({
                        type:'INITIAL_LIST',
                        payload:body
                    })
                })
        },
        countryClick:(index)=>{
            dispatch({
                type:'COUNTRY_LIST',
                payload:index
            })
        },
        provincesClick:(index)=>{
            dispatch({
                type:'PROVINCES_LIST',
                payload:index
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Index)
