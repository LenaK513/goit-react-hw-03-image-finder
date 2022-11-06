import React, { Component } from 'react';

export class ImageGallery extends Component {
  componentDidUpdate(prevProps, prevState) {
    const searchQuery = this.props.pictureName;
    const BASE_URL = 'https://pixabay.com/api/';
    const KEY = '30064107-c73b2a0aceced325114b9b159';
    if (prevProps.pictureName !== this.props.pictureName) {
      fetch(
        `${BASE_URL}?q=${searchQuery}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(console.log);
    }
  }
  render() {
    return <ul>{this.props.pictureName}</ul>;
  }
}
