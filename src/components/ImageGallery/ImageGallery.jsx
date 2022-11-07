import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Grid } from './ImageGallery.styled';

export const ImageGallery = ({ pictures }) => {
  return (
    <Grid>
      {pictures.map(({ id, webformatURL }) => (
        <ImageGalleryItem
          id={id}
          key={id}
          src={webformatURL}
        ></ImageGalleryItem>
      ))}
    </Grid>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.node,
    })
  ),
};
