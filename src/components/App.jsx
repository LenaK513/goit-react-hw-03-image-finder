import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchPictures } from 'api/fetchPictures';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ButtonAPI } from './Button/Button';
import { Loader } from './Loader/Loader';

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
    let data;

    if (prevState.pictureName === pictureName && prevState.page !== page) {
      this.setState({ error: null, loading: true });
      try {
        data = await fetchPictures(pictureName, page);

        this.setState({ page });
        this.setState(prevState => ({
          page,
          pictures: [...prevState.pictures, ...data.hits],
          error: null,
          loading: true,
        }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ loading: false });
      }
    }

    if (prevState.pictureName !== pictureName) {
      this.setState({ error: null, loading: true });
      try {
        data = await fetchPictures(pictureName, page);
        this.setState({
          page: 1,
          pictures: data.hits,
          error: null,
          loading: true,
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
        {loading && <Loader />}
        {pictures.length > 0 && <ImageGallery pictures={pictures} />}
        {!loading && pictures.length !== 0 && (
          <ButtonAPI onClick={this.loadMore} />
        )}

        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}
