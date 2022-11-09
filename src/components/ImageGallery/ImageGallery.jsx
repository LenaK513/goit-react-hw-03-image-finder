import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Grid } from './ImageGallery.styled';

export const ImageGallery = ({ pictures, toogleModal }) => {
  return (
    <Grid>
      {pictures.map(
        ({ id, webformatURL, tags, largeImageURL, toogleModal }) => (
          <ImageGalleryItem
            id={id}
            key={id}
            src={webformatURL}
            tags={tags}
            largeImageURL={largeImageURL}
            onClick={() => toogleModal(largeImageURL)}
          ></ImageGalleryItem>
        )
      )}
    </Grid>
  );
};

ImageGallery.propTypes = {
  toogleModal: PropTypes.func,
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.node,
      largeImageURL: PropTypes.node,
      tags: PropTypes.string,
    })
  ),
};
