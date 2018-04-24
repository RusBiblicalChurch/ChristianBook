import axios from 'axios'

export default new Promise((resolve) => {
  axios('/api/books')
    .then((response) => resolve(response.data))
    .catch(function (error) {
      alert('ошибонька вышла');
      console.log(error);
    })
})
