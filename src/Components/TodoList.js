import React from 'react'
import Router from './Router'

import TodoItem from './TodoItem'


class TodoList extends React.Component {

	constructor(props){
		super(props)

		this.state = {
			todoItems: [
				{ id: 1, data: "Item 1"},
				{ id: 2, data: "Item 2"}
			],
			inputValue: ''
		}
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleRemoveClick = this.handleRemoveClick.bind(this);
	}
	
	handleChange(e){

		this.setState({
			inputValue: e.target.value
		})
	}

	handleSubmit(e){
		// console.log('print out value:' + this.state.inputValue);
		const items = this.state.todoItems;
		items.push({
			id: items.length + 1,
			data: this.state.inputValue
		});

		this.setState({
			todoItems: items,
			inputValue: ''
		})
		
		e.preventDefault();
	}

	handleRemoveClick(index: nubmer){

		const oldItems = this.state.todoItems
		// console.log('is clicked' + index)
		const newItems = oldItems.slice(0,index).concat(oldItems.slice(index+1))

		this.setState({
			todoItems: newItems
		})
	}

	render(){
		const items = this.state.todoItems

		return(
			<div>
				<Router />
				<h1>TodoList</h1>
				<div>
					<form onSubmit={this.handleSubmit}>
						<label>
							<input type="text"
								value={this.state.inputValue}
								placeholder='Enter something..'
								onChange={this.handleChange}
							/>
							<input type="submit" value="Submit" />
						</label>
					</form>
					<ul>
						{
							items.map((items, index) => {
								return <TodoItem key={items.id} data={items.data} index={index} onClick={this.handleRemoveClick} />
							})
						}
					</ul>
				</div>
			</div>
		)
	}
}

export default TodoList