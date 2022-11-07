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
    page: 1,
  };

  handleFormSubmit = pictureName => {
    this.setState({ pictureName });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  async componentDidUpdate(_, prevState) {
    const { pictureName, page } = this.state;

    if (prevState.pictureName !== pictureName || prevState.page !== page) {
      this.setState({ loading: true });
      try {
        const data = await fetchPictures(pictureName);
        this.setState({
          pictures: data.hits,
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
    const { pictures, loading } = this.state;
    return (
      <div>
        <Searchbar dataForm={this.handleFormSubmit} />
        {loading && <div>Loading</div>}
        {pictures.length > 0 && <ImageGallery pictures={pictures} />}
        <button onClick={this.loadMore}>MORE</button>
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}
