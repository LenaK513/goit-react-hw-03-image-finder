import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchPictures } from 'api/fetchPictures';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ButtonAPI } from './Button/Button';

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

    if (prevState.pictureName === pictureName && prevState.page !== page) {
      try {
        const data = await fetchPictures(pictureName, page);
        // this.setState({ page });
        this.setState(prevState => ({
          page,
          pictures: [...prevState.pictures, ...data.hits],
          error: null,
        }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ loading: false });
      }
    }

    if (prevState.pictureName !== pictureName) {
      try {
        const data = await fetchPictures(pictureName, page);

        // this.setState({ page });
        this.setState(prevState => ({
          page: 1,
          pictures: data.hits,
          error: null,
        }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ loading: false });
      }
      //   if (!data) {
      //   toast.error('There is no information');
      //   return;
      // }
    }
  }

  render() {
    const { pictures, loading } = this.state;
    return (
      <div>
        <Searchbar dataForm={this.handleFormSubmit} />
        {loading && <div>Loading</div>}
        {pictures.length > 0 && <ImageGallery pictures={pictures} />}
        {pictures.length !== 0 && <ButtonAPI onClick={this.loadMore} />}
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}
