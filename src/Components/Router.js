import React from 'react'
import { Link } from 'react-router-dom'

class Router extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return (
			<ul className="list">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/todolist">TodoList</Link>
				</li>
				<li>
					<Link to="/startcountdown">StartCountDown</Link>
				</li>
				<li>
					<Link to="/endcountdown">EndCountDown</Link>
				</li>
				<li>
					<Link to="/user/Leo">Developer</Link>
				</li>
				<li>
					<Link to="/user/Jane">Designer</Link>
				</li>
			</ul>
			
		)
	}
}

export default Router
