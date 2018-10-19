import axios from 'axios'
import _ from 'lodash'

function getAll () {
  return new Promise((resolve, reject) => {
    axios('/api/books')
      .then((response) => resolve(response.data))
      .catch((e) => reject(e))
  })
}

function getById (id) {
  return new Promise((resolve, reject) => {
    axios(`/api/books/${id}`)
      .then((response) => resolve(response.data))
      .catch((e) => reject(e))
  })
}

export default { getAll, getById }
