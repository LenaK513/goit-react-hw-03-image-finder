import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './ImageGalleryItem.styled';
import { Image } from './ImageGalleryItem.styled';
export const ImageGalleryItem = ({ id, src }) => {
  return (
    <Item id={id}>
      <Image src={src} alt="#" />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.node,
};
