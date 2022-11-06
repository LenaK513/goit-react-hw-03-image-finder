import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchPictures } from 'api/fetchPictures';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
export class App extends Component {
  state = {
    pictureName: '',
    pictures: [],
  };

  handleFormSubmit = pictureName => {
    this.setState({ pictureName });
  };

  async searchPictures() {
    const { pictureName } = this.state;
    try {
      const { data } = await fetchPictures(pictureName);
      this.setState({ pictures: data.hits });
      console.log(data.hits);
    } catch (error) {}
  }

  componentDidMount() {
    this.searchPictures();
  }
  render() {
    return (
      <div>
        <Searchbar dataForm={this.handleFormSubmit} />
        <ImageGallery pictureName={this.pictureName} />
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}
