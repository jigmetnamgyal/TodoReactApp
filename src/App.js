import React, {Component} from 'react';
import Todos from './todos';
import AddTodoList from './add';

class App extends Component {
  state = {
    todos: [
      {
        id: 1, 
        content: "Buy Milk"
      },
      {
        id: 2, 
        content: "Buy food"
      }
    ]
  }
  deleteHandler = (id)=>{
    
    let todo = this.state.todos.filter(res=>{
      return res.id !== id;
    })
    this.setState({
      todos: todo
    })
  }

  adding = (object) => {
    object.id = Math.random();
    let arr = [...this.state.todos, object];
    this.setState({
      todos: arr
    })
  }

  render(){
    return(
      <div className="todo-app container">
        <h3 className="center green-text">This is My ToDo App</h3>
        <Todos todos={this.state.todos} deletetodo={this.deleteHandler}/>
        <AddTodoList add={this.adding}/>
      </div>
    );
  }
}

export default App;