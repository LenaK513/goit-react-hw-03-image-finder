import React from 'react';
import { Item } from './ImageGalleryItem.styled';
import { Image } from './ImageGalleryItem.styled';
export const ImageGalleryItem = ({ id, src }) => {
  return (
    <Item id={id}>
      <Image src={src} alt="" />
    </Item>
  );
};
