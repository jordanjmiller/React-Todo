import React from 'react';




const TodoForm = props => {

    return (
      <div>
          <form name='inputform' onSubmit={props.onSubmit}>
          <input type='text' name='inputBox' onChange={props.handleChange} placeholder='...todo' />
          <input type='submit' value='Add Todo'/>
          </form>
          <button onClick={props.toggleDisplayCompleted}>Clear Completed</button>
      </div>
    );
}

export default TodoForm;