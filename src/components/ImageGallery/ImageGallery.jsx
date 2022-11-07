import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
export const ImageGallery = ({ pictures }) => {
  {
    return (
      <ul>
        {pictures.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem id={id}>
            <img src={webformatURL} alt="Photo" />
          </ImageGalleryItem>
        ))}
      </ul>
    );
  }
};
