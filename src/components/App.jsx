import React, { Component } from 'react';

import { fetchPictures } from 'api/fetchPictures';
import { Searchbar } from 'Searchbar/Searchbar';
export class App extends Component {
  componentDidMount() {
    fetchPictures('sun').then(console.log);
  }
  render() {
    return <Searchbar />;
  }
}
