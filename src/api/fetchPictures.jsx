import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '30064107-c73b2a0aceced325114b9b159';

export const fetchPictures = async pictureName => {
  const response = await axios.get(
    `${BASE_URL}?q=${pictureName}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  console.log(response.data);
};
