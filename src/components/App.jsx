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
    loading: false,
    error: null,
  };

  handleFormSubmit = pictureName => {
    this.setState({ pictureName });
  };

  async componentDidUpdate(_, prevState) {
    const { pictureName } = this.state;
    if (prevState.pictureName !== pictureName) {
      try {
        this.setState({ loading: true });
        const { data } = await fetchPictures(pictureName);
        this.setState({
          pictures:({data.hits}),
          error: null,
        });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    return (
      <div>
        <Searchbar dataForm={this.handleFormSubmit} />
        <ImageGallery pictures={pictures} />
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}
