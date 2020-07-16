import React , {Component} from 'react';


class AddTodoList extends Component {
    state = {
        content: ''
    }
    changeHandler = (e) => {
      this.setState({
          content: e.target.value
      })  
    }
    submitHandler = (e) =>{
        e.preventDefault();
        this.props.add(this.state);
        this.setState({
            content : ''
        })

    }
    render(){
       return(
           <div>
            <form onSubmit={this.submitHandler}>
                <label >Add new ToDo List:</label>
                <input type="text" onChange={this.changeHandler} value={this.state.content}/>
            </form>         
           </div>
       );
    }
}

export default AddTodoList;