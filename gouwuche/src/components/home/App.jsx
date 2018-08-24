import React, { Component } from 'react'
import '../../fonts/iconfont.css'
import '../../css/app/app.css'
import {connect} from 'react-redux'
import {
    NavLink,
    Switch,
    Route,
	Redirect
} from 'react-router-dom'
import Onebox from './app/Onebox'
import Dainty from './app/Dainty'
import Family from './app/Family';
import Suit from './app/Suit';
import Welfare from './app/Welfare'
class App extends Component {
  static propTypes = {

  }

  render() {
    return (
      	<div className='app'>
			<div className='top'>
				<NavLink to='/home/app/onebox'>单盒自选</NavLink>
				<NavLink to='/home/app/dainty'>纤巧装</NavLink>
				<NavLink to='/home/app/family'>家庭装</NavLink>
				<NavLink to='/home/app/suit'>套装</NavLink>
				<NavLink to='/home/app/welfare'>福利社</NavLink>
			</div>
			<div className='section'>
				<Switch>
					
					<Route path='/home/app/onebox' component={Onebox}></Route>
					<Route path='/home/app/dainty' component={Dainty}></Route>
					<Route path='/home/app/family' component={Family}></Route>
					<Route path='/home/app/suit' component={Suit}></Route>
					<Route path='/home/app/welfare' component={Welfare}></Route>
				</Switch>
			</div>
      	</div>
    )
  }
}

export default connect()(App) 
