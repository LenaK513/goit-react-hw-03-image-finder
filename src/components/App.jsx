import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchPictures } from 'api/fetchPictures';
import { Searchbar } from 'Searchbar/Searchbar';

export class App extends Component {
  state = {
    pictureName: '',
  };
  handleFormSubmit = pictureName => {
    this.setState({ pictureName });
  };

  componentDidMount() {
    fetchPictures('sun').then(console.log);
  }
  render() {
    return (
      <div>
        <Searchbar dataForm={this.handleFormSubmit} />
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}
