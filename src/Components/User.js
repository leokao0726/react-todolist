import React from 'react'
import ReactDOM from 'react-dom'
import Router from './Router'
import { Link } from 'react-router-dom'

class User extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			name: props.match.params.name
		}
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			name: nextProps.match.params.name
		})
	}
	
	render(){
		return(
			<div>
				<Router />
				<h1>User: Hello {this.state.name} !!</h1>
			</div>
		)
	}
}

export default User;