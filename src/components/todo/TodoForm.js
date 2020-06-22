import React, { Component } from 'react';
import shortid from 'shortid';

class TodoForm extends Component {
  handleInputChange = (event) => {
    this.props.newForm(event.target.value);
  };

  submitForm = (event) => {
    event.preventDefault();

    this.props.submitForm({
      id: shortid.generate(),
      title: this.props.title,
      status: false,
    });
  };

  render() {
    return (
      <div className='col col-md-8 mx-auto'>
        <form onSubmit={this.submitForm}>
          <div className='form-group'>
            <input
              value={this.props.title}
              onChange={this.handleInputChange}
              className='form-control'
              placeholder='Todo ...'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default TodoForm;
