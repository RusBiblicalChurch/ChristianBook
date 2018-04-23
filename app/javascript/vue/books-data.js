import axios from 'axios'

export default new Promise((resolve)  => {
  axios('/api/books').then((response) => resolve(response.data))
})
