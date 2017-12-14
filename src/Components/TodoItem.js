import React from 'react'

class TodoItem extends React.Component {

	render(){
		var items = this.props.items;
		return(
			<div>
				{items.map(function(items){
					return <li key={items.id}>{items.data}</li>
				})}
			</div>	
		)
	}
}

export default TodoItem