import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchBar, Form, Button, Input } from './SearchBar.styled';
import { FaSistrix } from 'react-icons/fa';

export class Searchbar extends Component {
  state = {
    pictureName: '',
  };

  handleNameChange = event => {
    // console.log(event.currentTarget.value);
    this.setState({ pictureName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.pictureName.trim() === '') {
      toast.warn('alarm!');
      return;
    }
    this.props.dataForm(this.state.pictureName);
    this.setState({ pictureName: '' });
  };

  render() {
    return (
      <SearchBar>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <span>
              <FaSistrix />
            </span>
          </Button>

          <Input
            type="text"
            autocomplite="off"
            autoFocus
            value={this.state.pictureName}
            onChange={this.handleNameChange}
          />
        </Form>
      </SearchBar>
    );
  }
}
