import React from 'react';
import './components/TodoComponents/Todo.css'
import TodoList from './components/TodoComponents/TodoList.js';

class App extends React.Component {

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      greet: 'Todo List: MVP',
      displayCompleted: true,
      data: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: true
        }
      ],
      newTodo: {
        task: '',
        id: 0,
        completed: false
      }
    };
  }

  handleChange = e => {
    console.log(e.target.value);
    console.log(this.state);
    this.setState({newTodo: {...this.state.newTodo, task: e.target.value}});
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    console.log(e.target.value);
    console.log(e.target.name);
    console.log(e.target.inputBox.value);
    if (e.target.inputBox.value !== ''){
      this.setState({data: [...this.state.data, {...this.state.newTodo}, ] });
      e.target.inputBox.value = null;
    }
  }

  toggleCompleted = (index) => {
    console.log(index);
    console.log(this.state.data);
    // this.setState({data: this.state.data[index].completed = !this.state.data[index].completed });
    this.state.data[index].completed = !this.state.data[index].completed;
    this.forceUpdate();
  }

  toggleDisplayCompleted = () => {
    this.setState({displayCompleted: !this.state.displayCompleted});
  }

  render() {
    return (
      <div>
        <h2>{this.state.greet}</h2>
        <TodoList newTodo={this.state.newTodo} data={this.state.data} handleChange={this.handleChange} onSubmit={this.onSubmit} displayCompleted={this.state.displayCompleted} toggleDisplayCompleted={this.toggleDisplayCompleted}
        toggleCompleted={this.toggleCompleted}/>
      </div>
    );
  }
}

export default App;
