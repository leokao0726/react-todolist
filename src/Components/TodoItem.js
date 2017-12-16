import React from 'react'

class TodoItem extends React.Component {

	render(){
		return(
			<li onClick={() => {this.props.onClick(this.props.index)}}>{this.props.data}</li>
		)
	}
}

export default TodoItem