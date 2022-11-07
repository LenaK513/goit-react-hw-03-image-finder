import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
export const ImageGallery = ({ pictures }) => {
  return (
    <ul>
      {pictures.map(({ id, webformatURL }) => (
        <ImageGalleryItem
          id={id}
          key={id}
          src={webformatURL}
        ></ImageGalleryItem>
      ))}
    </ul>
  );
};
