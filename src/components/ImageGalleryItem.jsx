import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGallerry.module.css';

function ImageGalleryItem({ image, onImageClick }) {
  return (
    <li
      className={styles.ImageGalleryItem}
      onClick={() => onImageClick(image.largeImageURL)}
    >
      <img src={image.webformatURL} alt={image.tags} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
