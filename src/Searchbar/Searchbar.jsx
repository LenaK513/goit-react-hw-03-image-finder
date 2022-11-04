import React, { Component } from 'react';
import { SearchBar, Form, Button, Input } from './SearchBar.styled';
// import { FcSearch } from 'react-icons/fa';
export class Searchbar extends Component {
  render() {
    return (
      <SearchBar>
        <Form>
          <Button type="submit">
            <span>Search</span>
          </Button>

          <Input type="text" autocomplite="off" autoFocus />
        </Form>
      </SearchBar>
    );
  }
}
