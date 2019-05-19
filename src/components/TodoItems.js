import React from 'react';

class TodoItems extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    const labelText = {
      fontStyle: "normal",
      textDecorationLine: "none"

    }
    const statusText = {
      color: "rgb(243, 69, 69)"
    }
    if (this.props.todo.completed) {
      labelText.fontStyle = "italic"
      labelText.textDecorationLine = "line-through"
      labelText.color = "#cdcdcd"
      statusText.color = "rgb(11, 243, 11)"
    }
    return (
      <div className="todoList-div">
        <label style={labelText}>
          <input
            type="checkbox"
            checked={this.props.todo.completed}
          onChange={this.props.handleChange}
          />
          {this.props.todo.text}
        </label>
        <p><b>Status: </b><span style={statusText}>{this.props.todo.completed ? "Done" : "Waiting"}</span></p>
      </div>
    )
  }
}

export default TodoItems