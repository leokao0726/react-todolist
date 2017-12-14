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
	}
	
	handleChange(e){
		this.setState({
			inputValue: e.target.value
		})
	}

	handleSubmit(e){
		console.log('print out value:' + this.state.inputValue);
		
		const items = this.state.todoItems;
		items.push({
			id: items.length + 1,
			data: this.state.inputValue
		});

		this.setState({
			todoItems: items,
			inputValue: ''
		})
		
		for(var i=0;i<items.length; i++){
			console.log('todoitem id:' + items[i].id);
			console.log('todoitem data:' + items[i].data);
		};
		
		e.preventDefault();
	}

	render(){
		return(
			<div>
				<Router />
				<h1>TodoList</h1>
				<div>
					<form onSubmit={this.handleSubmit.bind(this)}>
						<label>
							<input type="text"
								value={this.state.inputValue}
								placeholder='Enter something..'
								onChange={this.handleChange.bind(this)}
							/>
							<input type="submit" value="Submit" />
						</label>
					</form>
					<ul>
						<TodoItem items={this.state.todoItems} />
					</ul>
				</div>
				
			</div>
		)
	}
}

export default TodoList