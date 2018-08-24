import React, { Component } from 'react'
import '../fonts/iconfont.css';
import '../css/home/home.css'
import {connect} from 'react-redux'
import {
    NavLink,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import App from './home/App'
import My from './home/My'
import Onebox from './home/app/Onebox'
class Home extends Component {
    constructor(props){
        super(props)
    }
    componentWillReceiveProps(){
       
    }
    render() { 
        let cont=0;
        let total=0;
        this.props.state.list.forEach(element => {
            cont+=element.num;
            total+=element.num*element.price
        });
    return (
        <div className='home'>
            <header>最快送至北京</header>
            <section>
                <Route path='/home/app' component={App}></Route>
                <Route path='/home/my' component={My}></Route>
            </section>
            <footer>
                <NavLink to='/home/app'>
                    <dl>
                        <dt className='iconfont icon-iconhuidaoshouye'></dt>
                        <dd>主页</dd>
                    </dl>
                </NavLink>
                <dl onClick={()=>{this.props.Cover()}}>
                    <dt className='iconfont icon-gouwuche'><em>{cont}</em></dt>
                    <dd>购物袋</dd>
                </dl>
                <NavLink to={this.props.state.isLogine?'/home/my':'/logine'}>
                    <dl>
                        <dt className='iconfont icon-facebook'></dt>
                        <dd>我的乐纯</dd>
                    </dl>
                </NavLink>
            </footer>
            {this.props.state.isCover?
                 <div className='cover'>
                    <div className='calculate'>
                        <h3>
                            <em onClick={()=>{this.props.Cover()}}>X</em>
                            <span>小伙伴，选购商品满90元起送</span>
                        </h3>
                        {
                            this.props.state.list.map((item,index)=>{
                                if(item.isSelect){
                                     return <h4 key={index}>
                                        <span>{item.name}</span>
                                        <span>
                                            <em onClick={()=>{this.props.Minus(item.id)}}>-</em>
                                            {item.num}
                                            <em onClick={()=>{this.props.Plus(item.id)}}>+</em>
                                        </span>
                                    </h4>
                                }
                            })
                        }
                        <p><em>{cont}</em>盒商品</p>
                        <h5><span>合计：<em>{total}</em></span><span>结算</span></h5>
                    </div>
                </div>:null
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
        Cover:()=>{
            dispatch({
                type:'COVER',
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
export default connect(mapStateToProps,mapDispatchToProps)(Home) 
