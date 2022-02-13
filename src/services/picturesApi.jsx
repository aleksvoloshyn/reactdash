import axios from 'axios'

const fetchPicturesWithQuery = (query, page) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=22398165-fb0cc592f6e3d650fc4eef6c6&q=${query}&page=${page}&per_page=12&image_type=photo`
    )
    .then((response) => response.data.hits)
}

export default fetchPicturesWithQuery
