import React from 'react';
import './TodoList.css';

const TodoList = ({ todos, deleteTodo, doneTodo }) => {
  const doneTodos = todos.filter((todo) => todo.status);
  const onGoingTodos = todos.filter((todo) => !todo.status);
  const doneTask = () => {
    // eslint-disable-next-line array-callback-return
    return doneTodos.map((todo) => {
      return (
        <li
          key={todo.id}
          className={`hover-item list-group-item d-flex justify-content-between align-items-center mb-1 ${
            todo.status ? 'list-color' : ''
          }`}
          style={
            todo.status
              ? {
                  textDecoration: 'line-through',
                  backgroundColor: 'cornsilk',
                }
              : {}
          }
        >
          {todo.title}
          <span>
            <button
              onClick={() => doneTodo(todo.id)}
              className='btn btn-success btn-sm mr-1'
            >
              ^
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className='btn btn-danger btn-sm'
            >
              X
            </button>
          </span>
        </li>
      );
    });
  };
  const onGoingTask = () => {
    // eslint-disable-next-line array-callback-return
    return onGoingTodos.map((todo, index) => {
      if (!todo.status) {
        return (
          <li
            key={todo.id}
            className={`hover-item list-group-item d-flex justify-content-between align-items-center mb-1 ${
              todo.status ? 'list-color' : ''
            }`}
            style={
              todo.status
                ? {
                    textDecoration: 'line-through',
                    backgroundColor: 'cornsilk',
                  }
                : {}
            }
          >
            {todo.title}
            <span>
              <button
                onClick={() => doneTodo(todo.id)}
                className='btn btn-success btn-sm mr-1'
              >
                ^
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className='btn btn-danger btn-sm'
              >
                X
              </button>
            </span>
          </li>
        );
      }
    });
  };

  return (
    <div className='col col-md-8 mx-auto text-center'>
      {onGoingTodos.length > 0 ? (
        <>
          <h3 className='text-white mb-3'>Ongoing Task</h3>
          <ul className='list-group'>{onGoingTask()}</ul>
        </>
      ) : (
        <h3 className='text-white mb-3'>No Task Yet</h3>
      )}

      {doneTodos.length > 0 ? (
        <>
          <h3 className='text-white mt-3'>Done Task</h3>
          <ul className='list-group'>{doneTask()}</ul>
        </>
      ) : null}
    </div>
  );
};

export default TodoList;
