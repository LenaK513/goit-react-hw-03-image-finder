import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './ImageGalleryItem.styled';
import { Image } from './ImageGalleryItem.styled';
export const ImageGalleryItem = ({ id, src, onClick }) => {
  return (
    <Item key={id} id={id}>
      <Image src={src} alt="" onClick={onClick} />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.node,
  tags: PropTypes.string,
  toogleModal: PropTypes.func,
  largeImageURL: PropTypes.node,
};
