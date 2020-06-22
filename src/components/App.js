import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos, addTodo, deleteTodo, updateTodo } from '../actions';

import TodoForm from './todo/TodoForm';
import TodoList from './todo/TodoList';
import './App.css';

class App extends Component {
  state = {
    newForm: '',
  };

  componentDidMount() {
    this.props.getTodos();
  }

  submitForm = (todo) => {
    this.props.addTodo(todo);
    this.setState({
      newForm: '',
    });
  };

  handleFormChange = (newForm) => {
    this.setState({
      newForm,
    });
  };

  handleDeleteTodo = (id) => {
    this.props.deleteTodo(id);
  };

  handleDoneTodo = (id) => {
    this.props.updateTodo(id);
  };

  render() {
    const { todos } = this.props;
    return (
      <div className='container'>
        <div className='row mt-5'>
          <TodoForm
            title={this.state.newForm}
            newForm={this.handleFormChange}
            submitForm={this.submitForm}
          />
          <TodoList
            doneTodo={this.handleDoneTodo}
            todos={todos}
            deleteTodo={this.handleDeleteTodo}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

export default connect(mapStateToProps, {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
})(App);
