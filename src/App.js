import React from 'react';
import TodoItems from './components/TodoItems';
import TodoData from './components/TodoData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      stateData: TodoData
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(
      prevState => {
        return {
          stateData: prevState.stateData.map(item => {
            if (id === item.id) {
              item.completed = !item.completed;
            }
            return item;
          })
        }
      }
    )
  }

  render() {
    let list = this.state.stateData.map(item => <TodoItems
      todo={item}
      key={item.id}
    handleChange={() => this.handleChange(item.id)}
    />);

    let completed = 0;
    this.state.stateData.forEach(item => {
      if (item.completed) {
        completed++;
      }
    });

    return (
      <div className="todo-div">
        <div className="notification">
          <p>Total Task : {this.state.stateData.length} </p>
          <p>Completed Task : {completed}</p>
        </div>
        {list}
      </div>
    )
  }

}

export default App