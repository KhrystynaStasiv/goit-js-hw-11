export default getImage;

function getImage(image) {
  const API_KEY = '44666739-d0cf1ddb18f9d30146fa54081';
  const BASE_URL = 'https://pixabay.com/api/';
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: image,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  console.log(searchParams.toString());
  return fetch(`${BASE_URL}?${searchParams}`).then(resp => resp.json());
}
