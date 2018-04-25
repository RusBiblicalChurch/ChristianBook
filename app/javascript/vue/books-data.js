import axios from 'axios'

export default new Promise((resolve, reject) => {
  axios('/api/books')
    .then((response) => resolve(response.data))
    .catch((e) => reject(e))
})
