import React from 'react';
export const ImageGalleryItem = ({ id, src }) => {
  return (
    <li id={id}>
      <img src={src} alt="" />
    </li>
  );
};
