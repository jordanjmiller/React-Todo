import React from 'react';
import Todo from './Todo.js';
import TodoForm from './TodoForm.js';

const TodoList = props => {
    console.log('todolist props: ', props);
    return (
    <div>
        {props.data && props.data.map((todo, index) =>{
              return <Todo index={index} data={props.data} todo={todo} displayCompleted={props.displayCompleted} toggleCompleted={props.toggleCompleted}/>
          })}
        <TodoForm {...props}/>
    </div>
    );
  }

export default TodoList;