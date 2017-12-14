import React from 'react'
import Router from './Router'
import { Link, Redirect } from 'react-router-dom'

class StartCountDown extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			number: 10
		}
	}

	tick(){
		if(this.state.number == 0){
			return
		}

		this.setState({
			number: this.state.number - 1
		})
	}

	componentDidMount(){
		setInterval(this.tick.bind(this), 1000)
	}
	
	render(){
		if(this.state.number == 0){
			return(
				<Redirect to={'/endcountdown'} />
			)
		}

		return(
			<div>
				<Router />
				<h1>StartCountDown</h1>
				<h2>{this.state.number}</h2>
			</div>
		)
	}
}

export default StartCountDown;