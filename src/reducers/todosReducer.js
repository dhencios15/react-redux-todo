import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
} from '../actions/actionTypes';

const todos = [];

export default (state = todos, action) => {
  switch (action.type) {
    case GET_TODOS:
      return state;

    case ADD_TODO:
      return [...state, action.payload];

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    case UPDATE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            status: !todo.status,
          };
        } else {
          return todo;
        }
      });

    default:
      return state;
  }
};
