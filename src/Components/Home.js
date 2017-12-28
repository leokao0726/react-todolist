import React from 'react'
import ReactDOM from 'react-dom'
import Router from './Router'
import { Link } from 'react-router-dom'

class Home extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			theTimeNow : '',
			theDateNow : '',
			theDayNow : '',
			theWeekDayNow : ''
		}
	}

	tick(){
		var week = new Array("Sunday","Monday","Tuesday","Wednesday",
                                    "Thursday","Friday","Saturday");

		this.setState({
			theTimeNow: new Date().toLocaleTimeString(),
			theDateNow : new Date().getDate(),
			theDayNow : new Date().getFullYear() + ' / ' + (new Date().getMonth()+1),
			theWeekDayNow : week[new Date().getDay()]
		})	
	}

	componentDidMount(){
		setInterval(this.tick.bind(this), 1000);
	}

	render(){
		return(
			<div className="home-background">
				<Router />
				<div className="container">
					<div className="title">
						<h1>The Moment Now</h1>
						<h3>「The joy and excitement we feel here and now are more important.」</h3>
					</div>
					<div className="calendar">
						<h3 className="date">{this.state.theDateNow}</h3>
						<h2 className="day">{this.state.theDayNow}</h2>
						<div className="weekday">{this.state.theWeekDayNow}</div>
						<h2 className="time_now">{this.state.theTimeNow}</h2>
					</div>
				</div>
				<div className="subtitle">
					<h2>What is your main focus for today?</h2>
					<li>
						<Link to="/todolist">Todo</Link>
					</li>
				</div>
				
				<div className="footer">
					<h4>LeoKao x ReactJS</h4>
				</div>
			</div>
		)
	}
}

export default Home;