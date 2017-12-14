import React from 'react'
import { Route } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import Home from './Home'
import TodoList from './TodoList'
import StartCountDown from './StartCountDown'
import EndCountDown from './EndCountDown'
import User from './User'


const routes = [
		{
			path: '/',
			exact: true,
			component: Home
		},
		{
			path: '/todolist',
			exact: true,
			component: TodoList
		},
		{
			path: '/startcountdown',
			exact: true,
			component: StartCountDown
		},
		{
			path: '/endcountdown',
			exact: true,
			component: EndCountDown
		},
		{
			path: '/user/:name',
			exact: true,
			component: User
		},
	]

class App extends React.Component {
	
	render(){
		return(
			<div>
				{renderRoutes(routes)}
			</div>
		)
	}
}

// <Route exact path="/" component={Home} />
// 				<Route exact path="/todolist" component={TodoList} />
// 				<Route exact path="/startcountdown" component={StartCountDown} />
// 				<Route exact path="/endcountdown" component={EndCountDown} />

// 				<Route exact path="/user/:name" component={User} />

export default App;