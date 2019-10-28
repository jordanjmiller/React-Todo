import React from 'react';

const Todo = props => {
    // console.log(props);

    return (
      <div onClick={() => {props.toggleCompleted(props.index)}}>
          {(()=>{
              if (props.todo) {
                  console.log(props.todo)
                if (props.todo.completed && props.displayCompleted){
                  return <p className='strikeThrough'>{props.todo.task}</p>
                }
                else if (!props.todo.completed){
                  return <p>{props.todo.task}</p>
                }
              }
          })()}
      </div>
    );
}

export default Todo;